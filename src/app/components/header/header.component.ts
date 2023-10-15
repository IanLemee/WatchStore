import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuVisivel: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickmenu () {
    this.menuVisivel = !this.menuVisivel
  }

}
