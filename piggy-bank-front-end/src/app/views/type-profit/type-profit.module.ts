import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TypeProfitRoutingModule } from './type-profit-routing.component';
import { TypeProfitComponent } from './type-profit.component';
import { TypeProfitDetailComponent } from './type-profit-detail/type-profit-detail.component';

@NgModule({
  declarations: [TypeProfitComponent, TypeProfitDetailComponent],
  imports: [
    SharedModule,
    TypeProfitRoutingModule
  ]
})
export class TypeProfitModule { }