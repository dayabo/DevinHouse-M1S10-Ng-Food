import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

qtItemPedido = 0;

  constructor(private pedidoService:PedidoService) { }

  ngOnInit(): void {
 }

  qtdTotalItem(){
   return this.pedidoService.buscarTotalPedido()
  }
}
