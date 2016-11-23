import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Ng2Cable, Broadcaster } from 'ng2-cable/js/index';

import { HomePage } from '../pages/home/home';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform,
              private ng2cable: Ng2Cable,
              private broadcaster: Broadcaster) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.ng2cable.subscribe('http://localhost:3000/cable', 'MessagesChannel');

    this.broadcaster.on<string>('MessagesChannel').subscribe(
      messages => {
        console.log(messages);
      }
    );
  }
}
