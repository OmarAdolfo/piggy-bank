import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseComponent
  },
  {
    path: ':id',
    component: ExpenseDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule {}