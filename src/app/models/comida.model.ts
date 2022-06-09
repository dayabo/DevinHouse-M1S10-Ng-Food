import { IBase } from "./base.model";

export interface IComidas extends IBase{
  descricao:string;
  valorUni:number;
  qtd:number;
  valorTotal:number;
  }