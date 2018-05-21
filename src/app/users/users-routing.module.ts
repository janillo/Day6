import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
	{
		path: '',
		component: UserComponent,
		children: [
			{ path: '', component: UserListComponent },
			{ path: ':id', component: UserEditComponent }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class EmployeesRoutingModule {}
