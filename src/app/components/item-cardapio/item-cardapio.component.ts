import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBebidas } from 'src/app/models/bebida.model';
import { IComidas } from 'src/app/models/comida.model';


@Component({
  selector: 'ngf-item-cardapio',
  templateUrl: './item-cardapio.component.html',
  styleUrls: ['./item-cardapio.component.css']
})
export class ItemCardapioComponent  {

  quantidade =1;

 @Input() item?: IComidas | IBebidas;
  
 //@Output() adicionaAoPedido = new EventEmitter<IComidas | IBebidas>();

 @Output() adicionaItensAoPedido = new EventEmitter();
 
  constructor() { }

  //adicionarAoPedido(){
  // this.adicionaAoPedido.emit(this.item)
  //}

  adicionarItensAoPedido(){
    const itensQuantidade ={
      item: this.item,
      quantidade: this.quantidade,
      qtd:this.item?.valorUni
    }
    this.adicionaItensAoPedido.emit(itensQuantidade);
    }
 

  aumentarQuantidade(){
   this.quantidade ++
  }

  diminuirQuantidade(){
    if(this.quantidade > 1 ){
    this.quantidade --
  }
}

}
