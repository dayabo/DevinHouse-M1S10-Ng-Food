import { Component, OnInit } from '@angular/core';
import { IBebidas } from 'src/app/models/bebida.model';
import { BebidaService } from 'src/app/services/bebida.service';
import { PedidoService } from 'src/app/services/pedido.service';


@Component({
  selector: 'ngf-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.css']
})
export class BebidaListaComponent implements OnInit {

  listaBebidas: IBebidas[] = []; 
  listaFiltroBebidas = this.listaBebidas
   
  constructor(
    private bebidaService: BebidaService,
    private pedidoService: PedidoService
    ) { }

  ngOnInit(): void {
    this.buscarBebidas()

  }

  buscarBebidas()
  {
    this.bebidaService
   .devolverBebidas()
   .subscribe((resposta:IBebidas[])=>{
    this.listaBebidas = resposta;
    this.listaFiltroBebidas = this.listaBebidas
   })
  }

  

  adicionarBebidaXQuantiade(itemXQtd:any){
    this.pedidoService.adicionarItensPedido(itemXQtd.item,itemXQtd.quantidade,itemXQtd.qtd)
    
  }

  pesquisa(event:Event){
    const target = event.target as HTMLInputElement
    const valor = target.value
  
    const listaFiltrada = this.listaBebidas.filter(list=> list.titulo.toLowerCase().includes(valor))
    this.listaFiltroBebidas= listaFiltrada
}
}
