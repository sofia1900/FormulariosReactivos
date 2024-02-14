import {AbstractControl, ValidationErrors} from "@angular/forms";

export class ValidatorsForm {
  static match (control : AbstractControl) : ValidationErrors | null {
    let password = control.value
    let passwordConfirm = control.value
    if (password == passwordConfirm) return null
    else return {match : true}
  }
}
