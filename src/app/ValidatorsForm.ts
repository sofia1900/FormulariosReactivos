import {AbstractControl, ValidationErrors} from "@angular/forms";

export class ValidatorsForm {
  static match (control : AbstractControl) : ValidationErrors | null {
    let pas = control.value
    if (pas == pas2){
      return null
    }else{
      return {match : true}
    }
  }
}
