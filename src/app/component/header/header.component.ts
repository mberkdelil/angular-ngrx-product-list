import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addNewProduct, writeText } from 'src/app/redux/action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartLength: any;
  text: any;

  addNewProductForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
    rating: new FormControl("", [Validators.required]),
    count: new FormControl("", [Validators.required]),
  })

  constructor(private store: Store<{ product: any }>) {
    console.log(store.select("product").subscribe((x) => {
      this.cartLength = x.cart.length;
    }));

  }

  addNewProduct() {
    this.store.dispatch(addNewProduct({ product: this.addNewProductForm.value }))
  }

  ngOnInit(): void {
  }

  filterText(e:any) {
    this.store.dispatch(writeText({ text: e.target.value }))
  }

}
