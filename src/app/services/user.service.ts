import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  getAllUser() {
    return this.http.get('http://localhost:8080/api/getAllUser');
  }
}
