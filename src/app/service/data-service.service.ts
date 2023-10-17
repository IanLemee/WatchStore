import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  quantidadeNoCarrinho: number = 0;
  item: boolean = false

  getQuantidadeNoCarrinho(): number {
    return this.quantidadeNoCarrinho;
  }

  constructor() { }
}
