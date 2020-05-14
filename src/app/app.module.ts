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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {BASE_URL_TOKEN} from "./config";
import {CustomInterceptorService} from "./common/services/custom-interceptor.service";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {reducers} from "./store";
import {EffectsModule} from "@ngrx/effects";
import {ProductsEffects} from "./store/effects/products.effect";
import { ProductComponent } from './header/shopping-cart/product/product.component';
import { ShoppingCartComponent } from './header/shopping-cart/shopping-cart.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { ProductsComponent } from './content/products/products.component';
import { SignupComponent } from './content/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsFilterPipe,
    ToUsdPipe,
    TooltipDirective,
    ProductComponent,
    ShoppingCartComponent,
    ProductsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductsEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService,
      multi: true
    },
    {
      provide: ProductsService,
      useClass: ProductsService
    },
    {
      provide: BASE_URL_TOKEN,
      useValue: environment.baseUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
