import { Component, OnInit,} from '@angular/core';
import { IBebidas } from 'src/app/models/bebida.model';
import { IComidas } from 'src/app/models/comida.model';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-pedido-lista',
  templateUrl: './pedido-lista.component.html',
  styleUrls: ['./pedido-lista.component.css']
})
export class PedidoListaComponent implements OnInit {
  quantidade:number = 0
  listaPedido: IComidas[] | IBebidas[] = [];
  finalizado:boolean=false
  vazio:boolean=true
 
  constructor(private pedidoService:PedidoService) { }

  ngOnInit(): void {
  this.atualizaTelaPedidos()
  
 
  }

  atualizaTelaPedidos(){
    this.listaPedido = this.pedidoService.buscarPedidos()
  }

  removerItem(item: IBebidas| IComidas){
    alert("Realmente Deseja Remover O Item "+ item.titulo)
    this.pedidoService.removerItemPedido(item)
    this.atualizaTelaPedidos()
  }
  removerTudo(){
    alert("Realmente Deseja Remover Todos Os Pedidos ?")
    this.pedidoService.limparPedido()
    this.atualizaTelaPedidos()
  }
 
  salvarPedido(){
    alert("Pedido Realizado com Sucesso !!!")
    this.pedidoService.limparPedido()
    this.atualizaTelaPedidos()
    this.finalizado = true
    this.vazio=false
  }
  aumentarQuantidade(pedido: IComidas | IBebidas){
    pedido.qtd = this.quantidade*1 + pedido.qtd 
    pedido.valorTotal= pedido.valorUni * pedido.qtd
    this.quantidade = 0
   }
  
   
   diminuirQuantidade(pedido: IComidas | IBebidas,index:any){
        if(pedido.qtd > this.quantidade){
          pedido.qtd = pedido.qtd - this.quantidade
          pedido.valorTotal= pedido.valorUni * pedido.qtd
        this.atualizaTelaPedidos()

  }else if(pedido.qtd <= this.quantidade){
    this.listaPedido.splice(index,1)
    this.atualizaTelaPedidos()
}

}

   TotalConta(){
    return this.pedidoService.TotalDaConta()
    
   }
 }


  


