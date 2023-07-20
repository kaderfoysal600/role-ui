import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoleServicesService {

  constructor(public http: HttpClient) { }
  // addCourse(userData: any) {
  //   return this.http.post('http://localhost:8080/api/tutorials', userData);
  // }
  AllRole() {
    return this.http.get('http://localhost:8080/api/getAllRole');
  }

  deleteUserById(id: string) {
    return this.http.delete('http://localhost:8080/api/deleteRole/' + id);
  }

  updateUserById(id: string, data: any) {
    return this.http.put('http://localhost:8080/api/updateOneRole/' + id, data);
  }
  addRole(data:any){
    return this.http.post('http://localhost:8080/api/createRole', data)
  }
}
