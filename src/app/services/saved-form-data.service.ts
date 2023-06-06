import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SavedFormDataService {
createdData:{}={};
pushData:[{}]=[{}];
  constructor() { }
  
  formData(data:{}){
    this.createdData=data;
    this.pushData.push(data);
  }
}
