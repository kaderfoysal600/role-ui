import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-role-dialog',
  templateUrl: './role-dialog.component.html',
  styleUrls: ['./role-dialog.component.scss']
})
export class RoleDialogComponent implements OnInit {
  // Data Form
  @ViewChild('formElement') formElement: NgForm | undefined;
  dataForm?: FormGroup;

    // Store Data
    roledata: any;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
        // Init Data Form
        this.initDataForm();
        if (this.data) {
          this.roledata = this.data;
          this.setFormValue();
        }
  }
    /**
   * INIT FORM & Submit
   * initDataForm()
   * setFormValue()
   * onSubmit()
   */
    private initDataForm() {
      this.dataForm = this.fb.group({
        name: [null, Validators.required],
      });
    }
  
    private setFormValue() {
      this.dataForm.patchValue(this.roledata);
    }
  
    onSubmit() {
      if (this.dataForm.invalid) {
        return;
      }
      this.dialogRef.close({
        data: this.dataForm.value,
      });
    }
  
    /**
     * ON CLOSE DIALOG
     */
    onClose() {
      this.dialogRef.close();
    }

}
