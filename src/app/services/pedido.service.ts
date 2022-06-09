import { Injectable } from '@angular/core';

import { IBebidas } from '../models/bebida.model';
import { IComidas } from '../models/comida.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
pedidoLista: IBebidas[] | IComidas[] =[];

valor:number=0
  constructor() { }

  buscarTotalPedido():number{

      let total = this.pedidoLista.reduce((acumulado , numero)=>
        acumulado + numero.qtd,0
      )
    return total
  }
  TotalDaConta():number{
    let total = this.pedidoLista.reduce((acumulado , numero)=>
    acumulado + numero.valorTotal,0
  )
      return total
  }

  limparPedido(){
    this.pedidoLista = [];
  }

  removerItemPedido(pedido: IComidas | IBebidas){
    
        this.pedidoLista = this.pedidoLista.filter((item)=>{
      if(item.titulo === pedido.titulo){
        if(item.qtd !== 1){
          item.qtd--
          item.valorTotal= item.valorTotal-item.valorUni 
          return item
        }
        return
      }
      return this.pedidoLista
    })
  }

  buscarPedidos(): IComidas[] | IBebidas[]{
    return this.pedidoLista;
  }
  conta = this.pedidoLista

  adicionarItensPedido(item: IComidas | IBebidas, qtddisplay:number, qtd:number,){
    if(this.pedidoLista.length ===0){
      this.novoPedido(item,qtddisplay,qtd)
    
  }else if(this.existeOPedido(item)){
       this.pedidoRepetido(item, qtddisplay,qtd)
      
  }else {
    
    this.novoPedido(item,qtddisplay,qtd)
  }
}

novoPedido(item: IComidas | IBebidas,qtddisplay:number ,qtd:number){
  let pedido = item
  pedido.qtd =qtddisplay
  pedido.valorTotal=qtddisplay*qtd
  this.pedidoLista.push(pedido);;
      return this.pedidoLista
}
existeOPedido(item: IComidas | IBebidas):any{
 
  let verifica =  this.pedidoLista.filter((pedido: IComidas | IBebidas):any=>{
    if( pedido.titulo == item.titulo ){
      return true
    
    
    }
  }).length
   return verifica
}

pedidoRepetido(item: IComidas | IBebidas, qtddisplay:number,qtd:number){
  this.pedidoLista.map((pedido)=>{
    if(pedido.id == item.id){
           pedido.qtd +=qtddisplay
           pedido.valorTotal+=qtddisplay*qtd
           return pedido
    }
    return pedido
  })
  return this.conta
}
}
