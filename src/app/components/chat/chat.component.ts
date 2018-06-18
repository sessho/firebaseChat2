import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  mensaje:string = "";

  constructor() { }

  ngOnInit() {
  }

  send(){
    console.log(this.mensaje);
  }

}
