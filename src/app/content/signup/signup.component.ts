import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public control: FormControl;
  public customForm: FormGroup;

  constructor(
    private _cd: ChangeDetectorRef,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.customForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), this.nameValidator]],
      lastName: ['', [Validators.required, Validators.minLength(4)], [this.asyncNameValidator]],
      passwordGroup: this._fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        cpassword: ['', [Validators.required, Validators.minLength(4)]],
      }),
      emails: this._fb.array([this._fb.control('')]),
    });

    this._cd.detectChanges();
  }

  public addEmail(): void {
    (this.customForm.get('emails') as FormArray).push(this._fb.control(''));
  }

  public removeEmail(index: number): void {
    (this.customForm.get('emails') as FormArray).removeAt(index);
  }

  public getControls(control: AbstractControl, path: string): AbstractControl[] {
    return (control.get(path) as FormArray).controls;
  }

  public nameValidator({value}: FormControl): ValidationErrors | null {
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    const err: ValidationErrors | null = valid ? null : {
      nospecial: "nur Buchstaben!",
    };
    return err;
  }

  public asyncNameValidator({value}: FormControl): ValidationErrors | null {
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    const err: ValidationErrors | null = valid ? null : {
      nospecial: "nur Buchstaben!",
    };
    return of(err).pipe(
      delay(1000)
    );
  }


}
