import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ToUsdPipe } from './to-usd.pipe';
import { TooltipDirective } from './common/directives/tooltip/tooltip.directive';
import {ProductsService} from "./products.service";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsFilterPipe,
    ToUsdPipe,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: ProductsService,
      useClass: ProductsService
    },
    {
      provide: 'BASE_URL',
      useValue: environment.baseUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
