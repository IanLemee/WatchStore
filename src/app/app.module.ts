import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardBtnComponent } from './macroComponents/card-btn/card-btn.component';
import { CardComponent } from './components/card/card.component';
import { BtnFilterComponent } from './macroComponents/btn-filter/btn-filter.component';
import { ASideComponent } from './components/a-side/a-side.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    CardBtnComponent,
    CardComponent,
    BtnFilterComponent,
    ASideComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
