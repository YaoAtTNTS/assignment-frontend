import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'http://localhost:8090/employee/';
  }

  getEmployees(params) {
    console.log("Before post on employee service.");
    return this.http.get(this.baseUrl + 'list', params)
  }

  public sortUsers (users, params) : any {
    console.log('Users: ' + users);
    var sortedUsers = users;
    var sortModel = null;
    var sortColId = '';
    var sort = ''; //asc or desc
    var filterModel;

    sortModel = params.sortModel;
    filterModel = params.filteModel;

    if(sortModel.length) {
      // implement fake sorting
      sortModel.forEach(element => {
        sortColId = element.colId;
        sort = element.sort;
      });

      if(sort == 'asc') {
        sortedUsers = _.sortBy(users, sortColId);
      } else {
        sortedUsers = _.sortBy(users, sortColId).reverse();
      }
    }

    console.log('Sorted users data: ' + sortedUsers);
    return {
      users: sortedUsers.slice(params.startRow, params.endRow),
      totalRecords: users.length
    };
  }

}
