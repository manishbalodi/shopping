import { Injectable } from "@angular/core";
import { Details } from "../shared/details.model";

@Injectable({providedIn:"root"})
export class CartService 
{
    public cartData : Details[] = [{
        name: "Mobile Name",
        features: {
          feature1: "Feature 1",
          feature2: "Feature 2",
          feature3: "Feature 3",
          feature4: "Feature 4",
          feature5: "Feature 5",
        },
        imagePath: "",
        price: 10000,
        description: "",
      }]

      getCartData()
      {
          return this.cartData.slice();
      }

      addToCart(item : Details)
      {
        this.cartData.push(item);
      }
}