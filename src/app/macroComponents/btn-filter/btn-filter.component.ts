import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-filter',
  templateUrl: './btn-filter.component.html',
  styleUrls: ['./btn-filter.component.scss']
})
export class BtnFilterComponent implements OnInit {

  isResponsiveView : boolean = window.innerWidth < 768

  btnPrice: boolean = true
  btnPriceClose: boolean = false

  showDivFilter: boolean = false
  showDiv: boolean = false
  img: string = 'assets/images/DownLine.svg'

  constructor() { }

  ngOnInit(): void {
  }

  onClickPrices() {
    this.showDiv = !this.showDiv
    this.btnPrice = !this.btnPrice
    this.btnPriceClose = !this.btnPriceClose
    
  }

  onClickFilter() {
    this.showDivFilter = !this.showDivFilter
    if (this.showDivFilter) {
      this.img = 'assets/images/UpLine.svg '
    } else  {
      this.img = 'assets/images/DownLine.svg'
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isResponsiveView = window.innerWidth <= 768;
  }
}
