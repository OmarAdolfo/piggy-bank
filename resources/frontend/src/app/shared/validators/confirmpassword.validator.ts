import { ValidatorFn, AbstractControl } from '@angular/forms';

export function confirmPasswordValidator(otherControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const value: any = control.value;
        const otherValue: any = otherControl.value;
        return otherValue === value ? null : { 'notEquals': { value, otherValue } };
    };
}