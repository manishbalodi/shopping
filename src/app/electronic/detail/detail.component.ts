import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListService } from 'src/app/service/list.service';
import { Details } from 'src/app/shared/details.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public showDetail!: Details;
  private id : number = 0;

  constructor(private listService : ListService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.showDetail = this.listService.getDetail(0);
    console.log(this.showDetail);
  }



}
