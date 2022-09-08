import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './redux/reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { FashionComponent } from './component/fashion/fashion.component';
import { JeweleryComponent } from './component/jewelery/jewelery.component';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    ElectronicsComponent,
    FashionComponent,
    JeweleryComponent
  ],
  imports: [
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      progressBar: true,
      progressAnimation: "increasing",
      preventDuplicates: true
    }),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
