import { Component } from '@angular/core';
import { SavedFormDataService } from 'src/app/services/saved-form-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {
  displayTable=false;
  // variable to check if datastorage contains anything or not
  fetchData :{}={};
  dataStorage:any;
  constructor(private data :SavedFormDataService){//service is imported
    this.fetchData=data.createdData;
    this.dataStorage=data.pushData;
    // data is fetched from services
    if( this.dataStorage.length!==0 && Object.keys(this.dataStorage[0]).length===0){
      this.dataStorage.shift();//if empty objects are there, remove them
    }
    if(this.dataStorage.length!==0){this.displayTable=true;}
  }
 }
  
  
  
