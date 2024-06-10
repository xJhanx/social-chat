import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder) { }

  form = this.formBuilder.group({
    user: ['',Validators.required],
    password: ['',Validators.required],
  });

  login() : void {
    console.log(this.form.value);

  }
  ngOnInit(): void {
  }


}
