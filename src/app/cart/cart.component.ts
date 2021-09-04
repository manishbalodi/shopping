import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Details } from '../shared/details.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartData : Details[] = [];
  isEmpty : boolean = true;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartData = this.cartService.getCartData();
    if(this.cartData.length===0)
      this.isEmpty=false;
  }

}
