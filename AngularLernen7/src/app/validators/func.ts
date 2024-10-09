import { ValidationErrors, AbstractControl, ValidatorFn } from "@angular/forms";

/*export  function capitalletterValidator (control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    const ascii : string[]=[];
    // convert to ascii


    // check
    for(let i=65; i<=90; i++){
        ascii.push(String.fromCharCode(i));
    }

    // Check if the first character is a capital letter from A to Z. If not, return an error.
    if(ascii.indexOf(value[0])===-1){
        return {capitalLetter: true};
    } 
    
    return null;
}*/


export function capitalletterValidator (count: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
      

        if (!value || value.length<count){
            return null;
        }


        const ascii : string[]=[];
        for(let i=65; i<=90; i++){
            ascii.push(String.fromCharCode(i));
        };




        let state: boolean = true;
        for(let i=0; i<count; i++){
            if(ascii.indexOf(value[i])===-1){
                state = false;
                break;
            }

        }

        return state? null : {capitalLetter: true};
    };

}

    export function matchPassword(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const password = control.get('password');
            const confirmPassword = control.get('confirmPassword');

            if (!password || !confirmPassword) {
            
                return null;
            }
            
            return password.value === confirmPassword.value? null : { matchPassword: true };
    };
}

