import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, flatMap } from 'rxjs/operators';
import { Observable, forkJoin, of, throwError } from 'rxjs';
import { User } from '../models/user.interface';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private usersUrl = 'https://jsonplaceholder.typicode.com/users';

	constructor(private http: HttpClient) {}

	getUsers(): Observable<User[]> {
		return this.http
			.get<User[]>(this.usersUrl)
			.pipe(catchError(this.handleError<any>('Get all users')));
	}

	getUser(id): Observable<User> {
		return this.http
			.get<User>(`${this.usersUrl}/${id}`)
			.pipe(catchError(this.handleError<any>('Get a user')));
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}
}
