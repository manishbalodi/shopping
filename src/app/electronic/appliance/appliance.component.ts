import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';
import { Details } from 'src/app/shared/details.model';

@Component({
  selector: 'app-appliance',
  templateUrl: './appliance.component.html',
  styleUrls: ['./appliance.component.css']
})
export class ApplianceComponent implements OnInit {

  mobileDetailsGotFromList!: Details;
  public showContent: boolean = false;
  public typeOfComponent : String = 'appliance';

  constructor(private listService : ListService) { }

  ngOnInit(): void {
    setTimeout(()=>this.showContent=true, 500);
  }

  onGettingdataFromList(detail : Details ){
    console.log(detail , " -> in mobile");
    this.mobileDetailsGotFromList = detail;
  }
}
