import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { FashionComponent } from './component/fashion/fashion.component';
import { JeweleryComponent } from './component/jewelery/jewelery.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {
    path: "", redirectTo: "all-products", pathMatch: "full"
  },
  {
    path: "all-products", component: ProductsComponent
  },
  {
    path: "cart", component: CartComponent
  },
  {
    path: "products/electronics", component: ElectronicsComponent
  },
  {
    path: "products/fashion", component: FashionComponent
  },
  {
    path: "products/jewelery", component: JeweleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
