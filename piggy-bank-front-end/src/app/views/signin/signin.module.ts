import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin-routing.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    SharedModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }