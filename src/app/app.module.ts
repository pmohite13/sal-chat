import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatService } from '../chat.service';
import { MainComponent } from './main/main.component';
import { JoinComponent } from './join/join.component';
import { ChatBussinessService } from './chat-bussiness.service';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'join', component: JoinComponent },
  { path: '', redirectTo: '/join', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [

  ],
  providers: [ChatService,
    ChatBussinessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
