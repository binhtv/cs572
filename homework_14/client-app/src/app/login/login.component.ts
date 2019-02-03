import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      loginInfo: this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      })
    });

    this.loginForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onSubmit() {
    console.log(this.loginForm);
  }

  get username() {
    return this.loginForm.get('loginInfo').get('username');
  }

  get password() {
    return this.loginForm.get('loginInfo').get('password');
  }
}
