import { User } from '../models/user.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: [ './user-list.component.scss' ]
})
export class UserListComponent implements OnInit {
	displayedColumns = [ 'id', 'name', 'username', 'email', 'buttons' ];
	dataSource: MatTableDataSource<User>;
	isLoadingResults = true;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private userService: UserService) {}

	ngOnInit() {
		this.refresh();
	}

	refresh() {
		this.isLoadingResults = true;
		this.userService.getUsers().subscribe((data) => {
			this.isLoadingResults = false;
			this.dataSource = new MatTableDataSource(data);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;
	}
}
