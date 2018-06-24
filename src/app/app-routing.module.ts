import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "../app/components/login/login.component";
import { ChatsComponent } from "../app/components/chats/chats.component";
import { ChatComponent } from "../app/components/chat/chat.component";

const APP_ROUTES: Routes = [
  { path:'login', component: LoginComponent},
  { path:'Chats', component: ChatsComponent},
  { path:'Chat', component: ChatComponent},
  { path:'**', component: LoginComponent}


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
