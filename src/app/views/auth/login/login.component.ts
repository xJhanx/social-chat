import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientImplement } from '../../../shared/http-client';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder,
  private readonly httpClient : HttpClientImplement,
  private readonly router : Router) { }

  form = this.formBuilder.group({
    email: ['',Validators.required],
    password: ['',Validators.required],
  });

  login() : void {
    this.httpClient.post('http://localhost:3000/auth/login',this.form.value).subscribe({
      next: (response : any) => {
        localStorage.setItem('token',response.token);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log("ha ocurrido un error",error);
      }
    })
  }
  ngOnInit(): void {
  }


}
