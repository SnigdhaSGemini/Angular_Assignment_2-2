import { Component } from '@angular/core';
import {AbstractControl,ValidatorFn,FormControl,FormGroup,Validators,} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  showData: any;//to store data 
  profilePicture: any;//to store profile picture URL
  technologies: string[] = [];//to store all technologies checkbox mcqs
  FormDataObject:any;//to store the object of form data

  lettersAndSpacesPattern = /^[a-zA-Z][a-zA-Z\s]*$/;//regex for name
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;//regex for email
  mobileNumberPattern = /^[6-9]\d{9}$/;//regex for mobile number
  allowedTypes = ['png', 'jpg', 'jpeg'];//to check valid file types 

  isChecked1 = false;//to check if checkboxes are checked or not
  isChecked2 = false;
  isChecked3 = false;
  isChecked4 = false;
  isChecked5 = false;

  constructor( private modalService: NgbModal) {}//import ngb modal
  
  validateForm = new FormGroup({//form validations
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(2),
      Validators.pattern(this.lettersAndSpacesPattern),
    ]),//name validation
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(this.emailPattern),
    ]),//email validation
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern(this.mobileNumberPattern),
    ]),//mobile validation
    gender: new FormControl('', [Validators.required]),//gender validation
    tech: new FormControl('', [Validators.required]),//technology validation
    category: new FormControl('', [Validators.required]),//category validation
    file: new FormControl('', [this.fileTypesValidator(this.allowedTypes)]),//profile pic validation
  });

  // function to check file types allowed for profile pics
  fileTypesValidator(allowedTypes: string[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const file = control.value as File;
      if (file) {
        var splitString = file.toString().split('.');
        if (allowedTypes.includes(splitString[splitString.length - 1])) {
          return null;
        }
      }
      return { fileTypes: true };
    };
  }

  // to create URL for the image file entered in profile pic
  loadFile(img: any) {
    var image = document.getElementsByTagName('img');
    this.profilePicture = URL.createObjectURL(img.target.files[0]);
  }
 
  // to store all data validated in a variable
  submitForm() {
    this.showData = this.validateForm.value;
  }

  // store form data in an object 
  storeData() {
    this.FormDataObject = {
      name: this.validateForm.value.name,
      gender: this.validateForm.value.gender,
      email: this.validateForm.value.email,
      mobile: this.validateForm.value.mobile,
      category: this.validateForm.value.category,
      technology: this.technologies,
      profilePic: this.profilePicture,
    };
    
  }

  // to validate form and pass data in modal component
  modalOpen() {this.storeData();
    if(this.name?.valid &&
      this.gender?.valid &&
      this.email?.valid &&
      this.mobile?.valid &&
      this.tech?.valid &&
      this.category?.valid &&
      (this.validateForm.value.file == '' || this.file?.valid)){const modelRef=  this.modalService.open(ModalComponent);
         modelRef.componentInstance.data = this.FormDataObject;
       }
  }

  // to check if a checkbox is checked, if it is, store its value in technology array
  addData1() {
    this.isChecked1 = !this.isChecked1;
    const technology = document.getElementsByClassName('tech');
    if (this.isChecked1) {
      this.technologies.push(technology[0].id);
    } else {
      var idx = this.technologies.indexOf(technology[0].id);
      this.technologies.splice(idx, 1);
    }
  }

  // to check if a checkbox is checked, if it is, store its value in technology array
  addData2() {
    this.isChecked2 = !this.isChecked2;
    const technology = document.getElementsByClassName('tech');
    if (this.isChecked2) {
      this.technologies.push(technology[1].id);
    } else {
      var idx = this.technologies.indexOf(technology[1].id);
      this.technologies.splice(idx, 1);
    }
  }

  // to check if a checkbox is checked, if it is, store its value in technology array
  addData3() {
    this.isChecked3 = !this.isChecked3;
    const technology = document.getElementsByClassName('tech');
    if (this.isChecked3) {
      this.technologies.push(technology[2].id);
    } else {
      var idx = this.technologies.indexOf(technology[2].id);
      this.technologies.splice(idx, 1);
    }
  }

  // to check if a checkbox is checked, if it is, store its value in technology array
  addData4() {
    this.isChecked4 = !this.isChecked4;
    const technology = document.getElementsByClassName('tech');
    if (this.isChecked4) {
      this.technologies.push(technology[3].id);
    } else {
      var idx = this.technologies.indexOf(technology[3].id);
      this.technologies.splice(idx, 1);
    }
  }

  // to check if a checkbox is checked, if it is, store its value in technology array
  addData5() {
    this.isChecked5 = !this.isChecked5;
    const technology = document.getElementsByClassName('tech');
    if (this.isChecked5) {
      this.technologies.push(technology[4].id);
    } else {
      var idx = this.technologies.indexOf(technology[4].id);
      this.technologies.splice(idx, 1);
    }
  } 

  // getter methods to get all values of form data 
  get file() {
    return this.validateForm.get('file');
  }
  get name() {
    return this.validateForm.get('name');
  }
  get gender() {
    return this.validateForm.get('gender');
  }
  get email() {
    return this.validateForm.get('email');
  }
  get mobile() {
    return this.validateForm.get('mobile');
  }
  get category() {
    return this.validateForm.get('category');
  }

  get tech() {
    return this.validateForm.get('tech');
  }

}
