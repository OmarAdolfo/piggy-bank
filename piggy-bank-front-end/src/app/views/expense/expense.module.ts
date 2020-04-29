import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpenseComponent } from './expense.component';
import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';

@NgModule({
    declarations: [ExpenseComponent, ExpenseDetailComponent],
    imports: [
        SharedModule,
        ExpenseRoutingModule
    ]
})
export class ExpenseModule { }