import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import {ChatService} from './chat/chat.service';

const config: SocketIoConfig = { url: 'https://chatbo8.herokuapp.com', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)

  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
