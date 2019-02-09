import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/users/exists';
@Injectable()
export class UsersService {
  constructor(public http: HttpClient) { }

  exists(email: string): Observable<any> {
    return this.http.get(`${API_URL}?email=${email}`);
  }
}

