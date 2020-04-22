import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { WelcomeComponentRoutingModule } from './welcome-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    SharedModule,
    WelcomeComponentRoutingModule
  ]
})
export class WelcomeComponentModule { }