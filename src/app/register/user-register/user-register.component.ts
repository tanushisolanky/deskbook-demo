import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Validation } from '../validators/validation';
import { PostdataService } from '../service/postdata.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent {
  form: FormGroup;
  submitted = false;
  isChecked: boolean = false;
  password!: boolean;
  allReadyRegistered!: boolean;
  confirmPassword!: boolean;
  namePattern = "^[A-Za-z]+('[A-Za-z]+)?$";
  emailPattern1 = "^[a-zA-Z0-9]+([\.]?[a-zA-Z0-9]+)*@{1,1}[a-zA-Z0-9]+([\.]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,3})+$";
  passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!_&#]).+$";

  constructor(
    private formBuilder: FormBuilder,
    // private apiService : ApiService,
    private route: Router,
    private userService: PostdataService,
  
  ) {
    this.allReadyRegistered = false;
    this.form = this.formBuilder.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(100),
            Validators.pattern(this.namePattern),
          ],
        ],

        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(100),
            Validators.pattern(this.namePattern),
          ],
        ],

        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.minLength(3),
            Validators.maxLength(80),
            Validators.pattern(this.emailPattern1),
          ],
        ],

        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(25),
            Validators.pattern(this.passwordPattern),
          ],
        ],

        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  // onclick icon show password and change the icon
  togglePasswordText() {
    this.isChecked = !this.isChecked;
    this.password = this.isChecked;
  }
  toggleConfirmPasswordText() {
    this.isChecked = !this.isChecked;
    this.confirmPassword = this.isChecked;
  }
  removeallReadyRegistered(){
    this.allReadyRegistered =false;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  
    this.userService.postData(this.form.value).subscribe((res: any) => {

      console.log(res);
      
    },
    
    (error) => {
      // Handle error
      if(error === 'Email Id Already Exists'){
       this.allReadyRegistered =true;
       return;
      }
    }
    );
  }
}
