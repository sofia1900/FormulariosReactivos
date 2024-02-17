import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  formulario! : FormGroup;
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario =  this.formBuilder.group({
      numberOfTickets : ['', [Validators.required]],
      tickets : new FormArray([])
    })
  }

  onNumeroTicketsChange() {
    const numTickets = this.formulario.get('numberOfTickets')?.value

    this.ticketArray.clear()

    for (let i = 0; i < numTickets; i++) {
      this.ticketArray.push(
        this.formBuilder.group({
          nombre: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
        })
      )
    }
  }

  get ticketArray() { return this.formulario.get('tickets') as FormArray }
  get ticketFormGroups() { return this.ticketArray.controls as FormGroup[]; }

  enviar(){
    if (this.formulario.valid){
      alert("ENVIADO")
      this.formulario.reset()
      this.ticketArray.clear()
    }
  }

  resert(){
    this.formulario.reset()
    this.ticketArray.clear()
  }

  clear(){
    this.ticketArray.reset()
  }
}
