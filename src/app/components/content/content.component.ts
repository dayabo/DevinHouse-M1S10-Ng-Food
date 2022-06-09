import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LISTA_MENUS_MOCK } from 'src/app/constants/menu-mock';
import { IMenu } from 'src/app/models/menu.model';






@Component({
  selector: 'ngf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  listaMenu:IMenu[]= LISTA_MENUS_MOCK;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  clickMenu(titulo:string){
    alert(titulo)
  }

  redirecionar(path:string){
    this.route.navigateByUrl(path);
  }
}
