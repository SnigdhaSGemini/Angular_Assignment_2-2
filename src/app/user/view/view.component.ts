import { Component } from '@angular/core';
import { SavedFormDataService } from 'src/app/services/saved-form-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {
  displayTable=false;
  fetchData :{}={};
  dataStorage:any;
  constructor(private data :SavedFormDataService){
    this.fetchData=data.createdData;
    this.dataStorage=data.pushData;
    if( this.dataStorage.length!==0 && Object.keys(this.dataStorage[0]).length===0){
      this.dataStorage.shift();
    }
    if(this.dataStorage.length!==0){this.displayTable=true;}
  }
 }
  
  
  
