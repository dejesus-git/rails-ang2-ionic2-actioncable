import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MessageData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MessageData {

  constructor(public http: Http) {}

  loadMessages(){
  	return this.http.get(`http://localhost:3000/conversations/1/messages`)
  }

}
