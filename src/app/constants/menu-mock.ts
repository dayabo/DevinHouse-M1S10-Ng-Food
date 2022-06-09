import { IMenu } from "../models/menu.model";


 export const LISTA_MENUS_MOCK:IMenu[]=[
    {
      id:1,
      titulo:"Bebidas",
      enderecoImagem:"assets/imag/drinkshome.webp",
      path:"/bebidas",
      card:"principalB",
      cardFooter:"finalB",
      button:"buttonB"
    },
    {
      id:2,
      titulo:"Comidas",
      enderecoImagem:"assets/imag/comidahome.webp",
      path:"/comidas",
      card:"principalC",
      cardFooter:"finalC",
      button:"buttonC"
    }
  ]