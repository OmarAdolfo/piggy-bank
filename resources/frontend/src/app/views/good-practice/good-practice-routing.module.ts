import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodPracticeComponent } from './good-practice.component';
import { GoodPracticeDetailComponent } from './good-practice-detail/good-practice-detail.component';

const routes: Routes = [
  {
    path: '',
    component: GoodPracticeComponent
  },
  {
    path: ':id',
    component: GoodPracticeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodPracticeRoutingModule {}