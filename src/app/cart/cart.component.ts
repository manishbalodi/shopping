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
  itemCountIncart : number = 1 ;

  detailsArray : any[] = [];

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    //this.cartData = this.cartService.getCartData();
    
    this.cartService.getCartData().subscribe(
      details => {
        let arr2 : object[] = [];
        details.forEach(element => {
             arr2.push(element[1]);
        });
        this.detailsArray = arr2;
        this.cartData = this.detailsArray;
        console.log(this.cartData);
        this.itemCountIncart = this.cartData.length;
        console.log(this.itemCountIncart);
       }
  );
  setTimeout(() => { 
    if(this.cartData.length===0)
      this.isEmpty=false;
   }, 500);
    //  this.itemCountIncart = this.cartData.length;
    //  console.log(this.itemCountIncart);
    // if(this.cartData.length===0)
    //   this.isEmpty=false;
  }

  onRemove(itemId : number)
  {
    this.cartService.removeFromCart(itemId);
    // this.cartData = this.cartService.getCartData();
    // this.itemCountIncart = this.cartData.length;
    // if(this.cartData.length===0)
    //   this.isEmpty=false;
  }

}
