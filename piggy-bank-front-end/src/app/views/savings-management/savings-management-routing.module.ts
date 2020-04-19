import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavingsManagementComponent } from './savings-management.component';

const routes: Routes = [
  {
    path: '',
    component: SavingsManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingsManagementRoutingModule {}