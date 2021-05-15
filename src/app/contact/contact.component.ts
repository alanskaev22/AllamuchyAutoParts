import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) { }

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
        Validators.maxLength(25)
      ]]
    });
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
  onSubmit(){
    console.log(this.contactForm);
  }

}
