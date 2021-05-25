import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({});
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  loading: boolean = false;
  successSubmit: string = 'Form was submitted successfully';
  failedSubmit: string = 'Failed to submit the form. Please try again';

  constructor(private fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.maxLength(15)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.maxLength(15)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      comment: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(250)
      ]]
    });
  }


  onSubmit(form: any, formDirective: FormGroupDirective) {
    this.loading = true;
    const email = form;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<any>('https://formspree.io/f/mqkwpryd',
      { name: email.firstName + ' ' + email.lastName, replyto: email.email, message: email.comment },
      { 'headers': headers, observe: 'response' })
      .subscribe((response) => {

        if (response.ok) {
          this._snackBar.open(this.successSubmit, '',
            {
              duration: 8000,
              panelClass: 'snackbar-style'
            });

          this.contactForm.reset();
          formDirective.resetForm();
          this.loading = false;
        }
        else {
          this._snackBar.open(this.failedSubmit, '',
            {
              horizontalPosition: this.horizontalPosition,

              duration: 8000
            });
        }
        this.loading = false;

        console.log(response);
      }
      )
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get comment() {
    return this.contactForm.get('comment');
  }

  get email() {
    return this.contactForm.get('email');
  }

}
