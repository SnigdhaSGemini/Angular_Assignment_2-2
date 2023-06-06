import { Component } from '@angular/core';
import {AbstractControl ,  ValidatorFn,FormControl, FormGroup, Validators } from '@angular/forms';
import { SavedFormDataService } from 'src/app/services/saved-form-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
 

  lettersAndSpacesPattern = /^[a-zA-Z][a-zA-Z\s]*$/;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  mobileNumberPattern = /^[6-9]\d{9}$/;
  allowedTypes = ['png','jpg','jpeg'];
  fileTypesValidator(allowedTypes: string[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const file = control.value as File;
      if (file) {
        var splitString = file.toString().split(".");
        if (allowedTypes.includes(splitString[splitString.length-1])) {
          return null;
        }
      }
      return { 'fileTypes': true };
    };
  }
  validateForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(30),Validators.minLength(2),Validators.pattern(this.lettersAndSpacesPattern)]),
    email: new FormControl('',[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
    mobile: new FormControl('',[Validators.required,Validators.pattern(this.mobileNumberPattern)]),
    gender: new FormControl('',[Validators.required]),
    tech: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    file: new FormControl('',[this.fileTypesValidator(this.allowedTypes)])
  });
  displayModal=false;
  closeModal=false;
  showData:any;
  profilePicture:any;
  loadFile(img:any){
    var image = document.getElementsByTagName('img');
    this.profilePicture=URL.createObjectURL(img.target.files[0]);
  }
  submitForm(){
    if(( this.name?.valid && this.gender?.valid && this.email?.valid && this.mobile?.valid
    && this.tech?.valid && this.category?.valid) &&(this.validateForm.value.file=="" || this.file?.valid)){
      this.displayModal=true;
      const  form = document.getElementById("create-user-div");
      if(form!==null){ form.style.filter='blur(5px)'}
      
    }
    else{
      this.displayModal=false;
    }
    this.showData=this.validateForm.value;
    
  }
  storeData(){
    var FormDataObject = {
      name: this.validateForm.value.name,
      gender: this.validateForm.value.gender,
      email: this.validateForm.value.email,
      mobile: this.validateForm.value.mobile,
      category: this.validateForm.value.category,
      technology: this.technologies,
      profilePic: this.profilePicture
    }
    this.sendToService.formData(FormDataObject);
    
  
  }
  modalClose(){
    const  form = document.getElementById("create-user-div");
    this.closeModal=true;
    if(form!==null){ form.style.filter='blur(0px)'}

  }

  modalOpen(){
    this.closeModal=false;
  }
  get name(){
    return this.validateForm.get('name')
  }
  get gender(){
    return this.validateForm.get('gender')
  }
  get email(){
    return this.validateForm.get('email')
  }
  get mobile(){
    return this.validateForm.get('mobile')
  }
  get category(){
    return this.validateForm.get('category')
  }
  technologies:string[]=[];
  get tech(){
    return this.validateForm.get('tech');
  }
  isChecked1=false;isChecked2=false;isChecked3=false;isChecked4=false;isChecked5=false;
   addData1(){
    this.isChecked1=!this.isChecked1;
    const technology = document.getElementsByClassName('tech');
    if(this.isChecked1){this.technologies.push(technology[0].id)}
    else{
      var idx = this.technologies.indexOf(technology[0].id);
      this.technologies.splice(idx,1);
     }
   }
   addData2(){
    this.isChecked2=!this.isChecked2;
    const technology = document.getElementsByClassName('tech');
     if(this.isChecked2){this.technologies.push(technology[1].id)}
     else{
      var idx = this.technologies.indexOf(technology[1].id);
      this.technologies.splice(idx,1);
     }
   }
   addData3(){
    this.isChecked3=!this.isChecked3;
    const technology = document.getElementsByClassName('tech');
    if(this.isChecked3){this.technologies.push(technology[2].id)}
    else{
      var idx = this.technologies.indexOf(technology[2].id);
      this.technologies.splice(idx,1);
     }
   }
   addData4(){
    this.isChecked4=!this.isChecked4;
    const technology = document.getElementsByClassName('tech');
    if(this.isChecked4){this.technologies.push(technology[3].id)}
    else{
      var idx = this.technologies.indexOf(technology[3].id);
      this.technologies.splice(idx,1);
     }
   }
   addData5(){
    this.isChecked5=!this.isChecked5;
    const technology = document.getElementsByClassName('tech');
    if(this.isChecked5){this.technologies.push(technology[4].id)}
    else{
      var idx = this.technologies.indexOf(technology[4].id);
      this.technologies.splice(idx,1);
     }
   }

  get file(){
    return this.validateForm.get('file')
  }
  constructor(private sendToService: SavedFormDataService){
    
  }
}
