import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-filter',
  templateUrl: './btn-filter.component.html',
  styleUrls: ['./btn-filter.component.scss']
})
export class BtnFilterComponent implements OnInit {

  showDiv: boolean = false
  img: string = 'assets/images/DownLine.svg'

  constructor() { }

  ngOnInit(): void {
  }

  onClickFilter() {
    this.showDiv = !this.showDiv
    if (this.showDiv) {
      this.img = 'assets/images/UpLine.svg '
    } else  {
      this.img = 'assets/images/DownLine.svg'
    }

  }

}
