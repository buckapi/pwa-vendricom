import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';
import { forkJoin, Observable,of } from 'rxjs';
import { map,mergeMap } from 'rxjs/operators';
// import { Butler } from "@services/butler.service";
import { Yeoman } from './yeoman.service';
import { AuthRESTService } from "./auth-rest.service";

export interface CardInterface {
	id?: number;
	name: string;
	identity:string;
	bornDate: string;
	active: boolean;
	imageUrl: string;
	urlImage: string;
  }

export interface PostInterface{
	id?:number;
}
 export interface PayInterface{
	id?:number;
 }

 export interface RequestInterface{
	id?:number;
 }

export interface UserInterface {
	id?:number;
}

export interface MessageInterface{
	id?:number;
}

export interface OrderInterface {
}
export interface PartInterface {
}
export interface ClientInterface {
}
export interface MessageInterface {
}
export interface ChatInterface {
}
export interface DistInterface {
}
export interface ProductInterface {
}

export interface BranchInterface {
}
export interface CarInterface {
}
export interface MemberInterface {

}




export interface TicketInterface {
}
export interface SerialInterface {
	serialT:string,
}
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	//ticket: Observable<any>;
	url:any;
	cards:any;
	orders:any;
	clients:any;
	dists:any;
	client:any;
	chat:any;
	messages:any;
	chats:any;
	cars:any;
	parts:any;
	branch:any;
	cierre:any;
	serial:any;
	transactions:any;
  	constructor(
	  	// public butler:Butler, 
		public yeoman: Yeoman,
  		private AuthRESTService:AuthRESTService,
 	 	private http: HttpClient
  	) {
		}
  	headers : HttpHeaders = new HttpHeaders({  		
		  "Content-Type":"application/json"	
	});


	// updateOrderStatus(orderId: string, newStatus: string): Observable<any> {
	// 	const url = `${this.yeoman.origin.restUrl}/orders/${orderId}`; // Reemplaza con la URL y el endpoint correctos
	// 	const body = { status: newStatus }; // Datos a enviar en el cuerpo de la solicitud
	
	// 	return this.http.put(url, body); // Realiza la solicitud PUT
	//   }

	  
	// changePassword(userId: string, newPassword: string): Observable<string> {
	// 	const url = `${this.yeoman.origin.restUrl}/api/user/changePassword`;
	// 	const requestBody = { userId, newPassword };
	
	// 	return this.http.post<string>(url, requestBody, { headers: this.headers });
	//   }

	  changePassword(userId: string, newPassword: string): Observable<any> {
		const url = `${this.yeoman.origin.restUrl}/api/UserPasswords/changePassword`;
		const data = { userId, newPassword };
		return this.http.post(url, data);
	  }


	deletePart(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/products/${id}/?access_token$={token}`;
		return this.http
		.delete<PartInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	userUpdate(id: string, userUpdate: UserInterface) {
		const token = this.AuthRESTService.getToken();
		// const url_api = `${this.yeoman.origin.restUrl}/api/Users/${id}/?access_token=${token}`;
		const url_api = `${this.yeoman.origin.restUrl}/api/Users/${id}?access_token=${token}`;

		return this.http
		  .put<UserInterface>(url_api, userUpdate, { headers: this.headers })
		  .pipe(map(data => data));
	  }
	deleteProduct(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/products/${id}/?access_token$={token}`;
		return this.http
		.delete<PartInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	
	deleteCar(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/cars/${id}/?access_token$={token}`;
		return this.http
		.delete<CarInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	deleteChat(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/chats/${id}/?access_token$={token}`;
		return this.http
		.delete<ChatInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	deleteMessage(idChat: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/messages?filter[where][idChat]=${idChat}/?access_token$={token}`;
		return this.http
		.delete<MessageInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	deleteMember(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/cards/${id}/?access_token$={token}`;
		return this.http
		.delete<MemberInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	getTransationByBranch(branch: string){
		const url_api = this.yeoman.origin.restUrl+`/api/transactions?filter[where][idBranch]=${branch}`;
		this.transactions = this.http.get(url_api);
		return ( this.http.get(url_api));		
	}


	getOrdersByDist(idDist: string){
		const url_api = this.yeoman.origin.restUrl+`/api/orders?filter[where][idDist]=${idDist}`;
		this.orders = this.http.get(url_api);
		return ( this.http.get(url_api));		
	}

	getAllProducts(){
		const url_api = this.yeoman.origin.restUrl+'/api/products';
		return this.http.get(url_api);
	}

	
	getAllCars(){
		const url_api = this.yeoman.origin.restUrl+'/api/cars';
		return this.http.get(url_api);
	}

	getAllChats(){
		const url_api = this.yeoman.origin.restUrl+'/api/chats';
		return this.http.get(url_api);
	}
	getMessagesBy(idChat: string){
		const url_api = this.yeoman.origin.restUrl+`/api/messages?filter[idUserwhere][idChat]=${idChat}`;
		this.messages = this.http.get(url_api);
		return ( this.http.get(url_api));		
	}
	getAllCards(){
		const url_api = this.yeoman.origin.restUrl+'/api/cards';
		return this.http.get(url_api);
	}

	getClientBy(idUser: string){
		const url_api = this.yeoman.origin.restUrl+`/api/clients?filter[where][idUser]=c${idUser}`;
		this.clients = this.http.get(url_api);
		return ( this.http.get(url_api));		
	}


	getAllDists() {
		const url_api = this.yeoman.origin.restUrl + '/api/dists';
		return this.http.get(url_api);
	}
	getClients() {
		const url_api = this.yeoman.origin.restUrl + '/api/clients';
		return this.http.get(url_api);
	}

	getAllOrders() {
		const url_api = this.yeoman.origin.restUrl + '/api/orders';
		return this.http.get(url_api);
	}

	getDistByIdDist(ref: string) {
		const url_api = this.yeoman.origin.restUrl + `/api/dists?filter[where][ref]=${ref}`;
		this.dists = this.http.get(url_api);
		return (this.http.get(url_api));
	}
	getDistBy(idUser: string) {
		const url_api = this.yeoman.origin.restUrl + `/api/dists?filter[where][idUser]=${idUser}`;
		this.dists = this.http.get(url_api);
		return (this.http.get(url_api));
	}
	getOrdersByClient(idClient: string) {
		const url_api = this.yeoman.origin.restUrl + `/api/orders?filter[where][idClient]=${idClient}`;
		this.orders = this.http.get(url_api);
		return (this.http.get(url_api));
	}
	deleteOrder(orderId: string): Observable<void> {
		const token = this.AuthRESTService.getToken();
		const url_api = `${this.yeoman.origin.restUrl}/api/orders/${orderId}/?access_token=${token}`;

		return this.http.delete<void>(url_api, { headers: this.headers });
	}
	deleteClient(clientId: string): Observable<void> {
		const token = this.AuthRESTService.getToken();
		const url_api = `${this.yeoman.origin.restUrl}/api/clients/${clientId}/?access_token=${token}`;
		return this.http.delete<void>(url_api, { headers: this.headers });
	}
	deleteDist(distId: string): Observable<void> {
		const token = this.AuthRESTService.getToken();
		const url_api = `${this.yeoman.origin.restUrl}/api/dists/${distId}/?access_token=${token}`;
		return this.http.delete<void>(url_api, { headers: this.headers });
	}



	
	
	


	getProduct(id: string){
		const url_api = this.yeoman.origin.restUrl+`/api/products/${id}`;
		return this.http.get(url_api);
	}

	

	getCierresByBranch(branch: string){
		const url_api = this.yeoman.origin.restUrl+`/api/infos?filter[where][idBranch]=${branch}`;
		this.cierre = this.http.get(url_api);
		return ( this.http.get(url_api));		
	}


	// updateOrderStatus(order: any): Observable<any> {
	// 	const url = `${this.yeoman.origin.restUrl}/orders/${order.id}`;
	// 	const orderUpdate = { status: 'procesando' }; // Datos a enviar en el cuerpo de la solicitud
	  
	// 	return this.http
	// 	  .put(url, orderUpdate)
	// 	  .pipe(map(data => data));
	//   }
	  orderUpdate(order : OrderInterface , id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/orders/${id}`;
		return this.http
		.put<CarInterface>(url_api, order)
		.pipe(map(data => data));
	}
	carUpdate(car :CarInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/cars/${id}`;
		return this.http
		.put<CarInterface>(url_api, car)
		.pipe(map(data => data));
	}
	partUpdate(part :PartInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/products/${id}`;
		return this.http
		.put<PartInterface>(url_api, part)
		.pipe(map(data => data));
	}
	cardUpdate(card :CardInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/cards/${id}`;
		return this.http
		.put<CardInterface>(url_api, card)
		.pipe(map(data => data));
	}
	clientUpdate(client :ClientInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/clients/${id}`;
		return this.http
		.put<CardInterface>(url_api, client)
		.pipe(map(data => data));
	}

	memberUpdate(member :MemberInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/cards/${id}`;
		return this.http
		.put<MemberInterface>(url_api, member)
		.pipe(map(data => data));
	}
	getPartsById(userId: string){
		const url_api = this.yeoman.origin.restUrl+`/api/products?filter[where][userId]=${userId}`;
		this.parts = this.http.get(url_api);
		return ( this.http.get(url_api));		
	}
	getCarsById(userId: string){
		const url_api = this.yeoman.origin.restUrl+`/api/cars?filter[where][userId]=${userId}`;
		this.cars = this.http.get(url_api);
		return ( this.http.get(url_api));		
	}
	getCardByUserId(userId: string){
		const url_api = this.yeoman.origin.restUrl+`/api/cards?filter[where][userd]=${userId}`;
		this.cards = this.http.get(url_api);
		return ( this.http.get(url_api));		
	}
	getSerialT(branch: string){
		const url_api = this.yeoman.origin.restUrl+`/api/branchs/${branch}`;
		this.branch = this.http.get(url_api);
		// this.butler.serialT=this.branch.serialT;
		return ( this.branch);		
	}
	
	// setSerialT(branch: string){
	// 	const url_api = this.yeoman.origin.restUrl+`/api/branchs/${branch}`;
	// 	this.branch = this.http.get(url_api);
	// 	this.butler.serialT=this.branch.serialT;
	// 	return ( this.branch);		
	// }
	setSerialT(serial:SerialInterface, branch: string){
		// let token = this.authService.getToken();
		const url_api = this.yeoman.origin.restUrl+`/api/branchs/${branch}`;
		return this.http
		.put<SerialInterface>(url_api, serial)
		.pipe(map(data => data));
	}

	getArticulos(url: any): Observable<any[]> {
		return this.http.get<any[]>(url + 'webapi/articulos/getlista');
	  }
	
	  getCategories(url: any): Observable<any[]> {
		return this.http.get<any[]>(url + 'webapi/familia/all');
	  }
	
	  getClientes(url: any): Observable<any[]> {
		return this.http.get<any[]>(url + 'webapi/clientes/getall');
	  }


	  getCliente(url: string, clcodigo: any): Observable<any[]> {
		// Concatena el valor de clcodigo en la URL
		const apiUrl = url + 'webapi/clientes/getcliente?clcodigo=' + clcodigo;
		
		return this.http.get<any[]>(apiUrl);
	  }


	  getDescuento(url: any , cllistaprecio:any): Observable<any[]> {
		const apiUrl = url + 'webapi/descuentos/getpromocionales?prolistaprecio=' + cllistaprecio;
		return this.http.get<any[]>(url );
	  }

	  getCatalogo(url: any): Observable<any[]> {
		return this.http.get<any[]>(url );
	  }
	
	  
	  getAllData(url: any): Observable<any[]> {
		return forkJoin([
		  this.getArticulos(url),
		  this.getCategories(url),
		  this.getClientes(url)
		]);
	  }
	  


	saveCard(card :CardInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/cards';
		return this.http
		.post<CardInterface>(url_api, card)
		.pipe(map(data => data));
	}
	saveOrder(order :OrderInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/orders';
		return this.http
		.post<CardInterface>(url_api, order)
		.pipe(map(data => data));
	}
	saveMessage(message:MessageInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/messages';
		return this.http
		.post<MessageInterface>(url_api, message)
		.pipe(map(data => data));
	}
	saveProduct(product :ProductInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/products';
		return this.http
		.post<ProductInterface>(url_api, product)
		.pipe(map(data => data));
	}

	saveClient(client :ClientInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/clients';
		return this.http
		.post<ClientInterface>(url_api, client)
		.pipe(map(data => data));
	}
	saveBranch(branch :BranchInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/branchs';
		return this.http
		.post<BranchInterface>(url_api, branch)
		.pipe(map(data => data));
	}
	saveDist(dist :DistInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/dists';
		return this.http
		.post<DistInterface>(url_api, dist)
		.pipe(map(data => data));
	}
	saveCar(car :CarInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/cars';
		return this.http
		.post<CarInterface>(url_api, car)
		.pipe(map(data => data));
	}
	savePart(part :PartInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/products';
		return this.http
		.post<PartInterface>(url_api, part)
		.pipe(map(data => data));
	}
	saveTicket(ticket :TicketInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/transactions';
		return this.http
		.post<TicketInterface>(url_api, ticket)
		.pipe(map(data => data));
	}
	
}