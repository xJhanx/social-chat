import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClientImplement } from '../../../shared/http-client';
import { environment } from '../../../../config';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private readonly httpClient: HttpClientImplement,
    private readonly formBuilder: FormBuilder,
  private readonly router: Router) { }

  form = this.formBuilder.group({
    name : [''],
    email: [''],
    password: ['']
  });
  errorRegister : string = '';
  register() {
    this.httpClient.post(`${environment.URL_BACKEND}/auth/register`, this.form.value).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      error: (response) => {
        this.errorRegister = response.error.error;
        console.log("ha ocurrido un error", response);
      }
    })
  }
}
