import { Component, OnInit } from '@angular/core';
import { IComidas } from 'src/app/models/comida.model';
import { ComidaService } from 'src/app/services/comida.service';
import { PedidoService } from 'src/app/services/pedido.service';


@Component({
  selector: 'ngf-comida-lista',
  templateUrl: './comida-lista.component.html',
  styleUrls: ['./comida-lista.component.css']
})
export class ComidaListaComponent implements OnInit {

  listaComidas:IComidas[]=[]
 
  listaFiltroComidas = this.listaComidas
  
  constructor(
    private comidaService: ComidaService,
    private pedidoService: PedidoService
    ) { }

  ngOnInit(): void {
   this.comidaService.devolverComidas()
   .subscribe((resultado:IComidas[])=>{
    this.listaComidas = resultado;
    this.listaFiltroComidas = this.listaComidas
   })
    
  }

  
  adicionarComidaXQuantiade(itemXQtd:any){
    this.pedidoService.adicionarItensPedido(itemXQtd.item,itemXQtd.quantidade,itemXQtd.qtd)
  }


    pesquisa(event:Event){
    
      const target = event.target as HTMLInputElement
      const valor = target.value
    
      const listaFiltrada = this.listaComidas.filter(list=> list.titulo.toLowerCase().includes(valor))
        this.listaFiltroComidas= listaFiltrada
   
  }
}



