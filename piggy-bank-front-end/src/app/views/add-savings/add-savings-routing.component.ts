import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSavingsComponent } from './add-savings.component';

const routes: Routes = [
  {
    path: '',
    component: AddSavingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSavingsRoutingModule {}