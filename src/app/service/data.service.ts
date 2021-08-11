import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Details } from "../shared/details.model";


@Injectable({providedIn : "root"})
export class DataService{

    constructor(private http : HttpClient){}

    createAndStoreDetails(detailData : Details){
        this.http.post('https://shopit-3f3c8-default-rtdb.firebaseio.com/mobile.json' , detailData)
        .subscribe(
      responseData =>{
        console.log(responseData);
      });
    //console.log(detailData);
    }

}