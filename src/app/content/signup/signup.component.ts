import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      passwordGroup: this._fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        cpassword: ['', [Validators.required, Validators.minLength(4)]],
      })
    });

    this._cd.detectChanges();
  }

}
