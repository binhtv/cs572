import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { mustCheckAgreeValidator } from '../shared/must-check-agree.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      signupInfo: this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      }),
      agree: [false, [mustCheckAgreeValidator]]
    });

    this.signupForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  get firstName() {
    return this.signupForm.get('signupInfo').get('firstName');
  }

  get lastName() {
    return this.signupForm.get('signupInfo').get('lastName');
  }

  get email() {
    //console.log(this.signupForm.get('signupInfo').get('email').errors);
    return this.signupForm.get('signupInfo').get('email');
  }

  get password() {
    return this.signupForm.get('signupInfo').get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('signupInfo').get('confirmPassword');
  }

  get agree() {
    return this.signupForm.get('agree');
  }
}
