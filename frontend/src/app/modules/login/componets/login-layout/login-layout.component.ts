import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {
  loginComponent: string = 'signIn';
  
  constructor() { }

  ngOnInit() {
  }

  onChangeLoginComponent(loginComponent: string) {
    this.loginComponent = loginComponent; 
  }
}