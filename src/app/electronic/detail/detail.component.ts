import { Component, Input, OnInit } from "@angular/core"
import { ActivatedRoute, Params } from "@angular/router"
import { ListService } from "src/app/service/list.service"
import { Details } from "src/app/shared/details.model"

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  // public showDetail!: Details;

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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.showDetail = this.listService.getDetail(0)
    console.log(this.showDetail)
  }
}

// = {
//   "name" : "Mobile Name",
//   "features" : {
//     "feature1" : "Feature 1",
//     "feature2" : "Feature 2",
//     "feature3" : "Feature 3",
//     "feature4" : "Feature 4",
//     "feature5" : "Feature 5",
//   },
//   "imagePath" : "",
//   "price" : 10000,
//   "description" : ""
// } ;
