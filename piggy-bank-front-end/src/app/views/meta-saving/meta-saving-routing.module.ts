import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaSavingComponent } from './meta-saving.component';
import { MetaSavingDetailComponent } from './meta-saving-detail/meta-saving-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MetaSavingComponent
  },
  {
    path: ':id',
    component: MetaSavingDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetaSavingRoutingModule {}