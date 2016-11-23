import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageData } from '../../providers/message-data';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  smsMessages: any;
  constructor(public navCtrl: NavController, public messages: MessageData) {
    this.messages.loadMessages().map(data => data.json()).subscribe(data => {
      this.smsMessages = data;
    })
  }
  

}
