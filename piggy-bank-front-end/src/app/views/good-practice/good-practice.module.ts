import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GoodPracticeComponent } from './good-practice.component';
import { GoodPracticeRoutingModule } from './good-practice-routing.module';

@NgModule({
    declarations: [GoodPracticeComponent],
    imports: [
        SharedModule,
        GoodPracticeRoutingModule
    ]
})
export class GoodPracticeModule { }