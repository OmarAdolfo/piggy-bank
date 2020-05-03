import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TypeProfitRoutingModule } from './type-profit-routing.component';
import { TypeProfitComponent } from './type-profit.component';

@NgModule({
  declarations: [TypeProfitComponent],
  imports: [
    SharedModule,
    TypeProfitRoutingModule
  ]
})
export class TypeProfitModule { }