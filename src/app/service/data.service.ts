import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Details } from "../shared/details.model";
import { exhaustMap, map, take, tap } from "rxjs/operators"
import { ListService } from "./list.service";



@Injectable({providedIn : "root"})
export class DataService{

    constructor(private http : HttpClient ){}

    createAndStoreDetails(detailData : Details , type : string){
      this.http.post('https://shopit-3f3c8-default-rtdb.firebaseio.com/'+type+'.json' , detailData)
        .subscribe(
      responseData =>{
        //console.log(responseData);
      });

    }

    getDetails(type : String){
       return this.http.get<Details[]>('https://shopit-3f3c8-default-rtdb.firebaseio.com/'+type+'.json').
       pipe(map(details=>{
        return Object.entries(details);
       }));
    }


  
}
