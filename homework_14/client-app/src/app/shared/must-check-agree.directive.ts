import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';

export function mustCheckAgreeValidator(control: AbstractControl): { [key: string]: any } | null {
	return control.value === true ? null : { mustCheckAgree: true };
}

//Make directive
// @Directive({
// 	selector: '[mustCheckAgree]',
// 	providers: [{ provide: NG_VALIDATORS, useExisting: MustCheckAgreeValidatorDirective, multi: true }]
// })
// export class MustCheckAgreeValidatorDirective implements Validator {
// 	validate(control: AbstractControl): { [key: string]: any } | null {
// 		debugger;
// 		return mustCheckAgreeValidator(control);
// 	}
// }