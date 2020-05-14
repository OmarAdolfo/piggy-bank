import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
    declarations: [UserComponent, UserDetailComponent],
    imports: [
        SharedModule,
        UserRoutingModule
    ]
})
export class UserModule { }