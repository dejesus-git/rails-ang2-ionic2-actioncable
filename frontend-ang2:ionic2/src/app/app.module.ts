import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MessageData } from '../providers/message-data';
import { Ng2Cable, Broadcaster } from 'ng2-cable/js/index';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [ MessageData, Ng2Cable, Broadcaster ]
})
export class AppModule {
  messages: any;
  constructor(private ng2cable: Ng2Cable, private broadcaster: Broadcaster){
    this.ng2cable.subscribe('http://localhost:3000/cable', 'MessagesChannel');

    // this.broadcaster.on<string>('MessagesChannel').subscribe(
    //   messages => {
    //     console.log(messages);
    //   });
  }

}
