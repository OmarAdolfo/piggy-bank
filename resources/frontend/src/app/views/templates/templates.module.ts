import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'primeng/chart';
import { TemplatesComponent } from './templates.component';
import { TemplatesRoutingModule } from './templates-routing.module';
import { CreateTemplateComponent } from './create-template/create-template.component';

@NgModule({
  declarations: [TemplatesComponent, CreateTemplateComponent],
  imports: [
    SharedModule,
    ChartModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }