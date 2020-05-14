import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TypeExpenseComponent } from './type-expense.component';
import { TypeExpenseRoutingModule } from './type-expense-routing.component';
import { TypeExpenseDetailComponent } from './type-expense-detail/type-expense-detail.component';

@NgModule({
  declarations: [TypeExpenseComponent, TypeExpenseDetailComponent],
  imports: [
    SharedModule,
    TypeExpenseRoutingModule
  ]
})
export class TypeExpenseModule { }