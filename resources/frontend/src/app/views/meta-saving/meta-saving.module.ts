import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MetaSavingRoutingModule } from './meta-saving-routing.module';
import { MetaSavingComponent } from './meta-saving.component';
import { MetaSavingDetailComponent } from './meta-saving-detail/meta-saving-detail.component';

@NgModule({
  declarations: [MetaSavingComponent, MetaSavingDetailComponent],
  imports: [
    SharedModule,
    MetaSavingRoutingModule
  ]
})
export class MetaSavingModule { }