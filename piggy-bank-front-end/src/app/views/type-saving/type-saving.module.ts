import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TypeSavingRoutingModule } from './type-saving-routing.component';
import { TypeSavingComponent } from './type-saving.component';

@NgModule({
  declarations: [TypeSavingComponent],
  imports: [
    SharedModule,
    TypeSavingRoutingModule
  ]
})
export class TypeSavingModule { }