import { Component } from "@angular/core";

import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-forget-password-modal",
  templateUrl: "./forget-password-modal.component.html"
})
export class ForgetPasswordModalComponent {
  constructor(public dialogRef: MatDialogRef<ForgetPasswordModalComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
