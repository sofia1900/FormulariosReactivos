import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidatorsForm} from "./ValidatorsForm";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formulario = new FormGroup({
    title : new FormControl ('', [Validators.required]),
    firstName : new FormControl ('', [Validators.required]),
    lastName : new FormControl ('', [Validators.required]),
    email : new FormControl ('', [Validators.required, Validators.email]),
    password : new FormControl ('', [Validators.required, Validators.minLength(8)]),
    passwordConfirm : new FormControl ('', [Validators.required, ValidatorsForm.match]),
    check : new FormControl ('', [Validators.requiredTrue])
  })

  submit() {
    if(this.formulario.valid){
      alert("enviado");
    }
  }
}
