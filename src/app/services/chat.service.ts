import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { UserInterface } from '@app/interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private pb: PocketBase;


  constructor() {
    // Cambia la URL por la de tu PocketBase si es necesario
    this.pb = new PocketBase('https://db.buckapi.com:8090'); 
  }

  // Método para iniciar sesión
  async login(email: string, password: string) {
    return await this.pb.collection('users').authWithPassword(email, password);
  }
  getCurrentUserId(): string | null {
    let user_string = localStorage.getItem('currentUser');
    if (user_string) {
      let user: UserInterface = JSON.parse(user_string);
      return user.id ?? null;
    } else {
      return null;
    }
  }
  // Obtener conversaciones de un cliente o administrador
  async getConversations(userId: string) {
    return await this.pb.collection('vendricomConversations').getFullList({
      filter: `client_id="${userId}" OR admin_id="${userId}"`,
    });
  }

  // Obtener mensajes en una conversación
  async getMessages(conversationId: string) {
    return await this.pb.collection('vendricomMessages').getFullList({
      filter: `conversation_id="${conversationId}"`,
      sort: '-created',
    });
  }

  // Enviar un nuevo mensaje
  async sendMessage(conversationId: string, senderId: string, content: string) {
    return await this.pb.collection('vendricomMessages').create({
      conversation_id: conversationId,
      sender_id: senderId,
      content: content,
    });
  }

  // Suscribirse a los mensajes en tiempo real
  subscribeToMessages(conversationId: string, callback: (message: any) => void) {
    this.pb.collection('vendricomMessages').subscribe('*', (e) => {
      if (e.record["conversation_id"] === conversationId) {
        callback(e.record);
      }
    });
  }
}
