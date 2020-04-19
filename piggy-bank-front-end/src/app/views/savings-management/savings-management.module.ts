import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SavingsManagementComponent } from './savings-management.component';
import { SavingsManagementRoutingModule } from './savings-management-routing.module';

@NgModule({
  declarations: [SavingsManagementComponent],
  imports: [
    SharedModule,
    SavingsManagementRoutingModule
  ]
})
export class SavingManagementModule { }