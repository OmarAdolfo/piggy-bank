import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeExpenseComponent } from './type-expense.component';
import { TypeExpenseDetailComponent } from './type-expense-detail/type-expense-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TypeExpenseComponent
  },
  {
    path: ':id',
    component: TypeExpenseDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeExpenseRoutingModule {}