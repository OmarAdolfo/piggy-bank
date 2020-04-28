import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodPracticeComponent } from './good-practice.component';

const routes: Routes = [
  {
    path: '',
    component: GoodPracticeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodPracticeRoutingModule {}