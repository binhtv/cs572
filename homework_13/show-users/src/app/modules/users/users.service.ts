import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(public http: HttpClient) { }

  getOnlineData() {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  getCachedData(): any[] | null {
    const userList = localStorage.getItem('user_list');
    if (userList !== null) {
      return JSON.parse(userList);
    }
    return null;
  }

  getUserDetail(uid: string): object | null {
    const userList = this.getCachedData();
    if (userList !== null) {
      const found = userList.filter(u => u.login.uuid === uid);
      if (found && found.length > 0) {
        return found[0];
      }
    }

    return null;
  }

  exists(uid: string): boolean {
    const userList = this.getCachedData();
    if (userList === null) {
      return false;
    }
    const found = userList.filter(u => u.login.uuid === uid);
    if (!found || found.length <= 0) {
      return false;
    }

    return true;
  }
}

