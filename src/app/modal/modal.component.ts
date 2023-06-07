import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SavedFormDataService } from '../services/saved-form-data.service';
// Service imported
declare var $: any; 
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() data: any;
  // data in form of object is fetched from create component
  constructor(public activeModal: NgbActiveModal,private sendToService: SavedFormDataService){}
  // services and ngb model imported
  sendDataService(){this.sendToService.formData(this.data);  this.modalClose(); }
  // data is sent to service on click on submit button and close the modal after that

  modalClose(){ this.activeModal.dismiss('Cross Click');}//to close modal on clicking on close button
}
