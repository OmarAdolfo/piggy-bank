import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TypeExpenseComponent } from './type-expense.component';
import { TypeExpenseRoutingModule } from './type-expense-routing.component';

@NgModule({
  declarations: [TypeExpenseComponent],
  imports: [
    SharedModule,
    TypeExpenseRoutingModule
  ]
})
export class TypeExpenseModule { }