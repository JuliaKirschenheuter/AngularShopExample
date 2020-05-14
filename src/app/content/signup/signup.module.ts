import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';

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
    CommonModule
  ]
})
export class SignupModule {}
