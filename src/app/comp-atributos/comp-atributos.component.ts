import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})

export class CompAtributosComponent {
  isEnableBlock: boolean = true;

  lista: string [] = [];

  item: string = "";
  corFonte: string = 'yellow';
  corFundo: string = 'blue';
  estilo: string = "disable";

  constructor(){

  }

  adicionarLista(){
    this.lista.push(this.item);
  }

  trocar():void {
    if (this.estilo === "disable"){
      this.estilo = "enable";
    }else {
      this.estilo = "disable";
    }
  }
}
