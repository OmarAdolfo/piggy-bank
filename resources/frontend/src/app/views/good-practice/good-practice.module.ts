import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GoodPracticeComponent } from './good-practice.component';
import { GoodPracticeRoutingModule } from './good-practice-routing.module';
import { GoodPracticeDetailComponent } from './good-practice-detail/good-practice-detail.component';

@NgModule({
    declarations: [GoodPracticeComponent, GoodPracticeDetailComponent],
    imports: [
        SharedModule,
        GoodPracticeRoutingModule
    ]
})
export class GoodPracticeModule { }