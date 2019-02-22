import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.scss']
})
export class LoginSignUpComponent {
  @Output() loginComponent = new EventEmitter<string>();

  changeLoginComponent(loginComponent: string) {
    this.loginComponent.emit(loginComponent);
  }

}
