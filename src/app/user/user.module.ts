import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
