import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Details } from 'src/app/shared/details.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listData : Details[] | undefined;

  public text : string = `This is a wider card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer.`

  constructor(private dataService : DataService) { }

  ngOnInit(): void {

    

  }

}
