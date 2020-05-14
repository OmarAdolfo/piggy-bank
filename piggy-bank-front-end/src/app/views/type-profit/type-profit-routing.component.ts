import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeProfitComponent } from './type-profit.component';
import { TypeProfitDetailComponent } from './type-profit-detail/type-profit-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TypeProfitComponent
  },
  {
    path: ':id',
    component: TypeProfitDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeProfitRoutingModule {}