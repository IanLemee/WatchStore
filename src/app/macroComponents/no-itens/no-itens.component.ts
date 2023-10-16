import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-no-itens',
  templateUrl: './no-itens.component.html',
  styleUrls: ['./no-itens.component.scss']
})
export class NoItensComponent implements OnInit {

  item: boolean = false

  constructor(public dataService: DataServiceService) { }

  ngOnInit(): void {
  }

  noItens() {
    this.dataService.item = this.item
  }

}
