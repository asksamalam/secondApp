import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core/primitives/di';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);
  getUserList(){
    const url = 'http://localhost:8080/api/users';
    return this.http.get<Array<User>>(url);
  }
}
