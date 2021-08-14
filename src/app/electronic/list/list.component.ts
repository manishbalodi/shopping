import { Component, OnInit } from "@angular/core"
import { Subscription } from "rxjs"
import { DataService } from "src/app/service/data.service"
import { Details } from "src/app/shared/details.model"
import { ListService } from "../../service/list.service"

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  listData: Details[] = []

  constructor( private listService: ListService  ) {}


  ngOnInit(): void {
    this.listData = this.listService.getData()
    //console.log(this.listData)
  }
}
