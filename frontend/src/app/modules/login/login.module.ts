import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule } from '@angular/material';

import { LoginLayoutComponent } from './componets/login-layout/login-layout.component';
import { LoginSignInComponent } from './componets/login-sign-in/login-sign-in.component';
import { LoginSignUpComponent } from './componets/login-sign-up/login-sign-up.component';
import { ForgetPasswordModalComponent } from './componets/forget-password-modal/forget-password-modal.component';

import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginLayoutComponent,
    LoginSignInComponent,
    LoginSignUpComponent,
    ForgetPasswordModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [ForgetPasswordModalComponent]
})
export class LoginModule { }
