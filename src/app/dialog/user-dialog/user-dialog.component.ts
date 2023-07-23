import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RoleServicesService } from 'src/app/services/role-services.service';
import { RoleDialogComponent } from '../role-dialog/role-dialog.component';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  // Data Form
  @ViewChild('formElement') formElement: NgForm;
  dataForm?: FormGroup;

    // Store Data+
    userdata: any;
    allRoles:any;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    public roleService: RoleServicesService,
  ) { }

  ngOnInit(): void {
            // Init Data Form
            this.initDataForm();
            if (this.data) {
              this.userdata = this.data;
              this.setFormValue();
            }
            this.getAllRole()
  }
    /**
   * INIT FORM & Submit
   * initDataForm()
   * setFormValue()
   * onSubmit()
   */
    private initDataForm() {
      this.dataForm = this.fb.group({
        username: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required],
        roles: [null],
      });
    }
  
    private setFormValue() {
      this.dataForm.patchValue(this.userdata);
    }
  
    onSubmit() {
      if (this.dataForm.invalid) {
        return;
      }
      this.dialogRef.close({
        data: this.dataForm.value,
        
      });
      console.log('user data from frontend', this.dataForm.value);
    }
  
    /**
     * ON CLOSE DIALOG
     */
    onClose() {
      this.dialogRef.close();
    }


    private getAllRole() {
      this.roleService.AllRole().subscribe({
        next: (res: any) => {
          console.log(res);
          this.allRoles = res;
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }

}
