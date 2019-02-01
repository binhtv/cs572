import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { UsersService } from './users.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserGuard implements CanActivate {
	constructor(private userService: UsersService, private router: Router) { }
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		if (!route.params.id || !this.userService.exists(route.params.id)) {
			console.log('user not found');
			this.router.navigate(['not-found']);
			return false;
		}

		return true;
	}
}