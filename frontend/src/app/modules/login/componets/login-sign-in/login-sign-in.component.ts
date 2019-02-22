import { Component, Output, EventEmitter } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";

import { LoginService } from "../../login.service";

import { ForgetPasswordModalComponent } from "../forget-password-modal/forget-password-modal.component";

@Component({
  selector: "app-login-sign-in",
  templateUrl: "./login-sign-in.component.html",
  styleUrls: ["./login-sign-in.component.scss"]
})
export class LoginSignInComponent {
  forgetPaswordModal: MatDialogRef<ForgetPasswordModalComponent>;
  @Output() loginComponent = new EventEmitter<string>();

  constructor(private dialog: MatDialog, private loginService: LoginService) {}

  changeLoginComponent(loginComponent: string) {
    this.loginComponent.emit(loginComponent);
  }

  onSubmit() {
    console.log('Submitted');
    this.loginService.getData().subscribe(res => console.log(res));
  }

  openForgetPasswordDialog() {
    this.forgetPaswordModal = this.dialog.open(ForgetPasswordModalComponent, {
      width: "300px"
    });
  }
}
