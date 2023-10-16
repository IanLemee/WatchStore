import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isItenOnCart : boolean = false;

  isMenuAberto: boolean = false;
  isResponsiveView : boolean = window.innerWidth < 768

  constructor(private dataService: DataServiceService) {
    this.atualizarEstadoCarrinho();
  }

  atualizarEstadoCarrinho() {
    const quantidadeNoCarrinho = this.dataService.getQuantidadeNoCarrinho();
    if (this.isItenOnCart == quantidadeNoCarrinho > 0) {
      this.isItenOnCart = true
    }
  }

  ngOnInit(): void {
  }

  getQuantidadeItensNoCarrinho(): number {
    return this.dataService.getQuantidadeNoCarrinho();
  }

  clickMenu() {
      this.isMenuAberto = !this.isMenuAberto;
    }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isResponsiveView = window.innerWidth <= 600; // Ajuste o valor conforme necessário
  }

}
