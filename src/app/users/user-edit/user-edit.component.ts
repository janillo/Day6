import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user.interface';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: [ './user-edit.component.scss' ]
})
export class UserEditComponent implements OnInit {
	user: User;
	panelOpenState = true;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private userService: UserService
	) {}

	ngOnInit() {
		this.route.params.subscribe((param) => {
			this.userService.getUser(param['id']).subscribe((data) => {
				console.log(data);
				this.user = data;
			});
		});
	}
}
