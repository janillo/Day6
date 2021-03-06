import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from 'src/app/authentication/login/login.component';

@NgModule({
	imports: [ CommonModule, AuthenticationRoutingModule, SharedModule ],
	declarations: [ LoginComponent ]
})
export class AuthenticationModule {}
