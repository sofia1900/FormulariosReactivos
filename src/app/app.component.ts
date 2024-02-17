import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private fb: FormBuilder) { }

  formulario = this.fb.group({
    title : ['', [Validators.required]],
    firstName : ['', [Validators.required]],
    lastName :  ['', [Validators.required]],
    birth :  ['', [Validators.required]],
    email : ['', [Validators.required, Validators.email]],
    password :  ['', [Validators.required, Validators.minLength(8)]],
    passwordConfirm :  ['', [Validators.required]],
    check :  ['', [Validators.requiredTrue]]
  },
    {validators : this.passwordMatchValidator}
  )

  submit() {
    if(this.formulario.valid){
      alert("enviado");
      this.formulario.reset()
    }
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')!.value;
    const confirmPassword = form.get('passwordConfirm')!.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

}
