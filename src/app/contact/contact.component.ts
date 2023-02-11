import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }
  isLoading = false
  sendForm:FormGroup = new FormGroup ({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(/^[A-Z][a-z]{2,10}$/)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01(1|2|0|5)[0-9]{8}$/)]),
    message: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(100), Validators.pattern(/^[a-zA-Z ]{10,100}/)]),
  })
  formData(sendForm:FormGroup){
    this.isLoading = true
    this._Router.navigate(['/home'])
  }
}
