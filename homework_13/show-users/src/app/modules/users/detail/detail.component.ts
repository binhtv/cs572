import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../users.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  @Input('user') userData = null;
  userId: string = null;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params.id;
      this.userData = this.userService.getUserDetail(this.userId);
    });
  }
}
