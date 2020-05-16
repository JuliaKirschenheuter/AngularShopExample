import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public control: FormControl;
  public customForm: FormGroup;

  constructor(
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.customForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this._cd.detectChanges();
  }

}
