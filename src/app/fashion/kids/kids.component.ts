import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListService } from 'src/app/service/list.service';
import { Details } from 'src/app/shared/details.model';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  mobileDetailsGotFromList!: Details;
  public showContent: boolean = false;
  public typeOfComponent : String = 'kids';

  constructor(private listService : ListService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(()=>this.showContent=true, 500);
  }

  onGettingdataFromList(detail : Details ){
    console.log(detail , " -> in mobile");
    this.mobileDetailsGotFromList = detail;
  }

}
