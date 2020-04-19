import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddSavingsComponent } from './add-savings.component';
import { AddSavingsRoutingModule } from './add-savings-routing.component';

@NgModule({
  declarations: [AddSavingsComponent],
  imports: [
    SharedModule,
    AddSavingsRoutingModule
  ]
})
export class AddSavingsModule { }