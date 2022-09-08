import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { decreaseCount, deleteCartItem, emptyCart, increaseCount } from 'src/app/redux/action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<any> = [];
  totalPrice: any;
  totalCount: any;

  constructor(private store: Store<{ product: any }>, private toastr: ToastrService) {
    this.store.select("product").subscribe(((x) => {
      console.log(x);
      this.cart = x.cart;
      this.totalPrice = x.cart.reduce((total: any, product: any) => (total = total + product.count * product.price), 0);
      this.totalCount = x.cart.reduce((total: any, product: any) => (total = total + product.count), 0);
    }))
  }

  ngOnInit(): void {
  }

  increaseButton(id: number) {
    this.store.dispatch(increaseCount({ id: id }));
    this.toastr.success(`Cart value of item id ${id} has been increased by 1`);
  }

  decreaseButton(id: number) {
    this.store.dispatch(decreaseCount({ id: id }));
    this.toastr.warning(`The cart value of item id ${id} has been reduced by 1`)
  }

  emptyButton(id: number) {
    this.store.dispatch(emptyCart({ id: id }));
    this.toastr.info(`The basket is completely emptied.`);
  }

  deleteFromCart(id: number) {
    this.store.dispatch(deleteCartItem({ id: id }));
    this.toastr.warning(`Product id ${id} has been successfully deleted from the cart.`)
  }

}
