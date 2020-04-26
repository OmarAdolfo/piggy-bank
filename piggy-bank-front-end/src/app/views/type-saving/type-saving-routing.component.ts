import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeSavingComponent } from './type-saving.component';

const routes: Routes = [
  {
    path: '',
    component: TypeSavingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeSavingRoutingModule {}