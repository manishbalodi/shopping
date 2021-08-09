import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public text : string = `This is a wider card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer.`

  constructor() { }

  ngOnInit(): void {
  }

}
