import { Component, Input } from "@angular/core";
import { UsersService } from '../users.service';

@Component({
	selector: 'user-list',
	templateUrl: './list.component.html',
	styleUrls: ['../users.component.scss']
})
export class ListComponent {
	constructor(private userService: UsersService) { }
	@Input('userList') userList = [];

	ngOnInit() {
		this.userList = this.userService.getCachedData();
		if (this.userList === null) {
			//Retry after 1 seconds
			setTimeout(() => {
				this.userList = this.userService.getCachedData();
			}, 1000);
		}
	}
}

