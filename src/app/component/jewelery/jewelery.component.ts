import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { addToCart, deleteFromCart, editProduct } from 'src/app/redux/action';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent implements OnInit {

  totalPrice: any;
  totalCount: any;

  jeweleryProducts: Product[] = [];

  constructor(private store: Store<{ product: any }>, private toastr: ToastrService) {
    this.store.select("product").subscribe((x: any) => {
      let jewelery = x.productList.filter((x: any) => x.category === "jewelery");
      this.jeweleryProducts = jewelery;
    })
  }

  getEditProduct(id: number) {
    this.store.select("product").subscribe((x: any) => {
      const product = x.productList.find((c: any) => c.id === id)
      this.editProductForm.controls['id'].setValue(product.id);
      this.editProductForm.controls['title'].setValue(product.title);
      this.editProductForm.controls['category'].setValue(product.category);
      this.editProductForm.controls['description'].setValue(product.description);
      this.editProductForm.controls['price'].setValue(product.price);
      this.editProductForm.controls['image'].setValue(product.image);
      this.editProductForm.controls['rating'].setValue(product.rating);
      this.editProductForm.controls['count'].setValue(product.count);
    })
  }

  editProductForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    title: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
    rating: new FormControl("", [Validators.required]),
    count: new FormControl("", [Validators.required]),
  })

  addToCart(id: number, product: any) {
    this.store.dispatch(addToCart({ id: id, product: product }));
    this.store.select("product").subscribe((x: any) => {
      this.totalPrice = x.cart.reduce((total: any, product: any) => (total = total + product.count * product.price), 0);
      this.totalCount = x.cart.reduce((total: any, product: any) => (total = total + product.count), 0);
    })
    this.toastr.success(product.title + " Successfully add to cart.", `You have a total of ${this.totalCount} items in your cart.`)
  }

  deleteProduct(id: number) {
    this.store.dispatch(deleteFromCart({ id: id }));
    this.toastr.warning(`Product id ${id} has been successfully deleted from the product list`)
  }

  editProduct() {
    this.store.dispatch(editProduct({ product: this.editProductForm.value }));
    this.toastr.info(`The product named ${this.editProductForm.value.title} has been successfully updated.`)
  }

  ngOnInit(): void {
  }

}
