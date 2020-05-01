import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpenseComponent } from './expense.component';
import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { PaymentDetailComponent } from './expense-detail/payment-detail/payment-detail.component';

@NgModule({
    declarations: [ExpenseComponent, ExpenseDetailComponent, PaymentDetailComponent],
    imports: [
        SharedModule,
        ExpenseRoutingModule
    ]
})
export class ExpenseModule { }