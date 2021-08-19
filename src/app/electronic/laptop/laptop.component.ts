import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';
import { Details } from 'src/app/shared/details.model';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  mobileDetailsGotFromList!: Details;
  public showContent: boolean = false;

  constructor(private listService : ListService) { }

  ngOnInit(): void {
    setTimeout(()=>this.showContent=true, 500);
  }

  onGettingdataFromList(detail : Details ){
    console.log(detail , " -> in mobile");
    this.mobileDetailsGotFromList = detail;
  }
}
