import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfitComponent } from './profit.component';
import { ProfitDetailComponent } from './profit-detail/profit-detail.component';
import { RevenueDetailComponent } from './profit-detail/revenue-detail/revenue-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProfitComponent
  },
  {
    path: ':id',
    component: ProfitDetailComponent
  },
  {
    path: ':id/revenue/:idrevenue',
    component: RevenueDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfitRoutingModule {}