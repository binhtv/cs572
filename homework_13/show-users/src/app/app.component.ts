import { Component } from '@angular/core';
import { UsersService } from './modules/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'show-users';

  constructor(private userService: UsersService) {}

  ngOnInit() {
    localStorage.setItem('user_list', null);
    //Load user list and save into localStorage
    this.userService.getOnlineData().subscribe(res => {
      if (res['results']) {
        //Store into local storage
        localStorage.setItem('user_list', JSON.stringify(res['results']));
      }
    });
  }
}
