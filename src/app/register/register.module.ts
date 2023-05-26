import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapitalizeDirective } from '../shared/directives/capitalize.directive';
import { PostdataService } from './service/postdata.service';


@NgModule({
  declarations: [
    UserRegisterComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    PostdataService
  ]
})
export class RegisterModule { }
