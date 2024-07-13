import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  menuType: string ="adminsxxx";

  produtos: string[] = [];
  constructor(){
     this.produtos = [
        "mouse","teclado","cabo","font"
     ]
  }

  adicionar(){
    this.produtos.push("memória");
  }

  remover(index: number){
    this.produtos.splice(index,1);
  }
}
