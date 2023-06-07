import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SavedFormDataService {
createdData:{}={};//object of recently filled data in form is fetched here
pushData:[{}]=[{}];//array of objects to keep all form data fetched till now
  constructor() { }
  
  formData(data:{}){
    // fetch data from modal component
    this.createdData=data;
    this.pushData.push(data);
    console.log(this.pushData);
  }
}
