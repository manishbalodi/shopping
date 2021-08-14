import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { DataService } from "src/app/service/data.service";
import { Details } from "src/app/shared/details.model";

@Injectable({providedIn:"root"})
export class ListService {

   detailsArrayChanged = new Subject<Details[]>();

    detailsArray : any[] = [];

    

    constructor(private dataService : DataService ){}

    getData(){
         this.dataService.getDetails().subscribe(
             details => {
               let arr2 : object[] = [];
               details.forEach(element => {
                    arr2.push(element[1]);
               });
               this.detailsArray = arr2;
              }
         );
         return this.detailsArray;
    }

    getDetail(id : number){
       return this.detailsArray[id];
    }

}





 //  //this.detailsArray = details;
                // //  debugger;
                // const ar: any = [];
                //  console.log(details);
                // .forEach(row => {
                //     // Object.keys(row).forEach(data  => {
                //     //     console.log(data, 'row data');
                //     //     this.detailsArray.push(
                //     //         new Details(data['name'],
                //     //         data['description'],
                //     //         data['imagePath'],
                //     //         data['features'],
                //     //         data['price'] ));
                //     // //         console.log(data);
                //     // });
                //     ar.push(row['name']);
                //  });
                    
                //  console.log(ar, 'dsbh');
                // // const array = [];
                // // let i = 0;
                // // Object.keys(details).forEach((key)=>{
                // //     array.push({[i] : key['description']});
                // //     i++;
                // // })