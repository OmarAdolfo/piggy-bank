import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfitComponent } from './profit.component';
import { ProfitRoutingModule } from './profit-routing.module';
import { ProfitDetailComponent } from './profit-detail/profit-detail.component';
import { RevenueDetailComponent } from './profit-detail/revenue-detail/revenue-detail.component';

@NgModule({
  declarations: [ProfitComponent, ProfitDetailComponent, RevenueDetailComponent],
  imports: [
    SharedModule,
    ProfitRoutingModule
  ]
})
export class ProfitModule { }