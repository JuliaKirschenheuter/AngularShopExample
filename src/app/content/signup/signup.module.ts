import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SignupComponent
      }
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SignupModule {}
