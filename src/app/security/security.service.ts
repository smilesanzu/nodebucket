/**
 * Title: security.service.ts
 * Author: Professor Krasso
 * Co-Author: Janis Gonzalez
 * Date: 8/17/23
 * Description: security service imports and exports
 */

// import
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// export security service for /api/employees
@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  findEmployeeId(empId: number) {
    return this.http.get('/api/employees/' + empId)
  }
}
