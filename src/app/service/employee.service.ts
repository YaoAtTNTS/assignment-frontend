import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import * as _ from 'underscore';
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly baseUrl: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'http://localhost:8090/employee/';
  }

  getEmployees(params) {
    return this.http.get(this.baseUrl + 'list',{
      params: params
    })  }

  getEmployee(id): Employee {
    let employee: Employee;
    this.http.get(this.baseUrl + id).subscribe(data => {
      console.log(data['result']);
      employee = data['result'];
    });
    return employee;
  }

  addEmployee(e: string) {
    return this.http.post(this.baseUrl, e, this.httpOptions);
  }

  updateEmployee(e: string) {
    return this.http.patch(this.baseUrl, e, this.httpOptions);
  }

  deleteEmployee(id) {
    return this.http.delete(this.baseUrl + id, this.httpOptions);
  }

}
