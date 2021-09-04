import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Details } from "../shared/details.model";

@Injectable({providedIn:"root"})
export class CartService 
{
    public cartData : Details[] = []

    constructor(private http : HttpClient ){}

      getCartData()
      {
         return this.cartData.slice();
    //      return  this.http.get<Details[]>('https://shopit-3f3c8-default-rtdb.firebaseio.com/cart.json').
    //    pipe(map(details=>{
    //     return Object.entries(details);
    //    }));
      }

      addToCart(item : Details)
      {
        this.cartData.push(item);
    //     this.http.post('https://shopit-3f3c8-default-rtdb.firebaseio.com/cart.json' , item)
    //     .subscribe(
    //   responseData =>{
    //     //console.log(responseData);
    //   });
      }

      removeFromCart(itemId : number)
      {
        this.cartData.splice(itemId,1);
      }
}