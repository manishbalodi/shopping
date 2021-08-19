import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { Subscription } from "rxjs"
import { DataService } from "src/app/service/data.service"
import { Details } from "src/app/shared/details.model"
import { ListService } from "../../service/list.service"
import { v4 as uuidV4 } from "uuid";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  listData: Details[] | undefined ;

  @Output() listComponetToMobileComponent = new EventEmitter<Details>();

  constructor( private listService: ListService  ) {}

    @Input('type') type : String = '';
    public showContent : boolean = false;
   ngOnInit(): void {
    this.listData = this.listService.getData(this.type);
    setTimeout(()=>this.showContent=true, 500);
    //console.log(this.listData)
  }

  mobileData(mobileDetail : Details){
    console.log(mobileDetail , " -> in list");
    this.listComponetToMobileComponent.emit(mobileDetail);
  }
}
