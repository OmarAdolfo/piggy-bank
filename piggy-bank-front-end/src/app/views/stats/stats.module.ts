import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatsComponent } from './stats.component';
import { StatsRoutingModule } from './stats-routing.module';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [StatsComponent],
  imports: [
    SharedModule,
    ChartModule,
    StatsRoutingModule
  ]
})
export class StatsModule { }