import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-btn',
  templateUrl: './card-btn.component.html',
  styleUrls: ['./card-btn.component.scss']
})
export class CardBtnComponent implements OnInit {

  quantidade:number = 0

  constructor() { }

  ngOnInit(): void {
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
