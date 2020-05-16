import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public control: FormControl;

  constructor(
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.control = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this._cd.detectChanges();
  }

}
