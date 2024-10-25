import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { Butler } from '@app/services/butler.service';
import { GlobalService } from '@app/services/global.service';
import { PocketAuthService } from '@app/services/pocket-auth.service';
import { ScriptService } from '@app/services/script.service';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { ChatService } from '@app/services/chat.service';

@Component({
  selector: 'app-admin-support',
  standalone: true,
  imports: [],
  templateUrl: './admin-support.component.html',
  styleUrls: ['./admin-support.component.css']
})
export class AdminSupportComponent implements OnInit {
  messageForm: FormGroup;
  userId: string | null = null;  // Inicializar como null para manejar casos donde el ID no esté disponible
  conversationId: string | null = null;  // Inicializar como null para manejar casos donde no se obtenga el ID

  constructor(
    private formBuilder: FormBuilder, 
    public AuthRESTService: AuthRESTService,
    public pocketAuthService: PocketAuthService,
    public global: GlobalService,
    public http: HttpClient,
    public _butler: Butler,
    public script: ScriptService,
    public virtualRouter: virtualRouter,
    public chatService: ChatService
  ) {
    // Inicializar el formulario para el envío de mensajes
    this.messageForm = this.formBuilder.group({
      message: ['']
    });
  }

  ngOnInit(): void {
    this.userId = this.AuthRESTService.getCurrentUserId();
    if (this.userId) {
      this.AuthRESTService.getConversationId(this.userId).subscribe(
        conversationId => {
          if (conversationId) {
            this.conversationId = conversationId;
            this.loadMessages(this.conversationId);
          } else {
            console.error('El conversationId no está definido');
          }
        },
        error => {
          console.error("Error al obtener el conversationId:", error);
        }
      );
    } else {
      console.error('El userId no está definido');
    }
  }
  

  async loadMessages(conversationId: string) {
    try {
      const messages = await this.chatService.getMessages(conversationId);
      console.log(messages); // Aquí podrías hacer algo con los mensajes, como mostrarlos en la UI
    } catch (error) {
      console.error("Error al cargar los mensajes:", error);
    }
  }

  async sendMessage() {
    const messageContent = this.messageForm.value.message;

    if (messageContent.trim() && this.userId && this.conversationId) {
      try {
        await this.chatService.sendMessage(this.conversationId, this.userId, messageContent);
        this.messageForm.reset();  // Limpiar el campo de entrada
      } catch (error) {
        console.error('Error al enviar el mensaje:', error);
      }
    } else {
      console.error('El mensaje está vacío o el userId/conversationId no están definidos');
    }
  }
}
