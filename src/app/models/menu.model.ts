import { IBase } from "./base.model";

export interface IMenu  extends IBase{
   path: string,
   card:string,
      cardFooter:string,
      button:string
  }
  