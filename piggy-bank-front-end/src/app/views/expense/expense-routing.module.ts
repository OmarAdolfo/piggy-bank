import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { PaymentDetailComponent } from './expense-detail/payment-detail/payment-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseComponent
  },
  {
    path: ':id',
    component: ExpenseDetailComponent
  },
  {
    path: ':id/payment/:idpayment',
    component: PaymentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule {}