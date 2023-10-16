import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-card-btn',
  templateUrl: './card-btn.component.html',
  styleUrls: ['./card-btn.component.scss']
})
export class CardBtnComponent implements OnInit {

  quantidade:number = 0

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
  }
  
  adicionarAoCarrinho() {
    this.dataService.quantidadeNoCarrinho += this.quantidade; // Atualize com a quantidade correta
  }

  plus() {
    this.quantidade++
  }

  minus() {
    this.quantidade--
    if(this.quantidade <  0) {
      this.quantidade = 0
    }
  }

}
