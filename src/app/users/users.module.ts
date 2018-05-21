import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
	imports: [ CommonModule, EmployeesRoutingModule, SharedModule, FlexLayoutModule ],
	declarations: [ UserListComponent, UserComponent, UserEditComponent ],
	entryComponents: []
})
export class UsersModule {}
