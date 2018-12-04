import { Directive } from '@angular/core';
import { Validator,NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{
    provide:NG_VALIDATORS,
    useExisting:ConfirmEqualValidatorDirective,
    multi:true
  }]
})
export class ConfirmEqualValidatorDirective { //implements Validator

  constructor() { }

}
