import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [UserComponent],
    imports: [
        SharedModule,
        UserRoutingModule
    ]
})
export class UserModule { }