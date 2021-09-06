import { Component, Input, OnInit } from "@angular/core"
import { ActivatedRoute, Params } from "@angular/router"
import { CartService } from "src/app/service/cart.service";
import { ListService } from "src/app/service/list.service"
import { Details } from "src/app/shared/details.model"

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  // public showDetail!: Details;
  public showContent : boolean = false;
  @Input("mobDetail") showDetail: Details = {
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
  };

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private cartService : CartService
  ) {}

  ngOnInit(): void {
    this.showDetail = this.listService.getDetail(0)
    setTimeout(()=>this.showContent=true, 500);
    console.log(this.showDetail)
  }

  onAddingToCart()
  {
    this.cartService.addToCart(this.showDetail);
    // this.isAdded=false;
  }
}
