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
  addUser(data:any){
    return this.http.post('http://localhost:8080/api/auth/signup', data)
  }
  deleteUserById(id: string) {
    return this.http.delete('http://localhost:8080/api/auth/deleteUser/' + id);
  }
  updateUserById(id: string, data: any) {
    return this.http.put('http://localhost:8080/api/auth/updateUserRole/' + id, data);
  }
  loginUser(data:any){
    return this.http.post('http://localhost:8080/api/auth/signin', data)
  }
}
