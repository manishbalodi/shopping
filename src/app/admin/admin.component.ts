import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Details } from '../shared/details.model';
import { Features } from '../shared/features.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

   addDataForm!: FormGroup;


  constructor(private dataService : DataService) { 
    this.addDataForm = new FormGroup({
      'name' : new FormControl('',Validators.required),
      'feature1' : new FormControl('',Validators.required),
      'feature2' : new FormControl('',Validators.required),
      'feature3' : new FormControl('',Validators.required),
      'feature4' : new FormControl('',Validators.required),
      'feature5' : new FormControl('',Validators.required),
      'price' : new FormControl('',Validators.required),
      'imagePath' : new FormControl('',Validators.required),
      'description' : new FormControl('',Validators.required),
      'relatedComponent' : new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log(this.addDataForm);
    let featuresData : Features = {
      "feature1" : this.addDataForm.value.feature1,
      "feature2" : this.addDataForm.value.feature2,
      "feature3" : this.addDataForm.value.feature3,
      "feature4" : this.addDataForm.value.feature4,
      "feature5" : this.addDataForm.value.feature5,
    };
    let detailsData : Details = {
      "name" : this.addDataForm.value.name,
      "features" : featuresData,
      "price" : this.addDataForm.value.price,
      "imagePath" : this.addDataForm.value.imagePath,
      "description" : this.addDataForm.value.description,
    }
    let componentRelatedTo : string = this.addDataForm.value.relatedComponent;

    console.log(detailsData);
    console.log(componentRelatedTo);
    this.dataService.createAndStoreDetails(detailsData , componentRelatedTo);
    this.addDataForm.reset();
  }

}
