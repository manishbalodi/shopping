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
  public itemsArray : any;
  itemCountIncart : number = 0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartData = this.cartService.getCartData();
    // this.cartService.getCartData().subscribe(
    //   items =>{
    //     let arr2 : object[] = [];
    //            items.forEach(element => {
    //                 arr2.push(element[1]);
    //            });
    //           this.itemsArray = arr2;
    //   }
    // );
    //   this.cartData = this.itemsArray;
    this.itemCountIncart = this.cartData.length;
    if(this.cartData.length===0)
      this.isEmpty=false;
  }

  onRemove(itemId : number)
  {
    this.cartService.removeFromCart(itemId);
    this.cartData = this.cartService.getCartData();
    this.itemCountIncart = this.cartData.length;
    if(this.cartData.length===0)
      this.isEmpty=false;
  }

}
