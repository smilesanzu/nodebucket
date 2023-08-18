import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  findEmployeeId(empId: number) {
    return this.http.get('/api/employees/' + empId)
  }
}
