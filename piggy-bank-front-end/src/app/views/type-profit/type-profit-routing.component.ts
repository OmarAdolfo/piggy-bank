import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeProfitComponent } from './type-profit.component';

const routes: Routes = [
  {
    path: '',
    component: TypeProfitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeProfitRoutingModule {}