import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesComponent } from './templates.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
const routes: Routes = [
  {
    path: '',
    component: TemplatesComponent
  },
  {
    path: 'anno/:anno/mes/:month',
    component: CreateTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule {}