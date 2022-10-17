import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";

import { GridOptions, IGetRowsParams } from "ag-grid-community";
import { Subscription } from "rxjs";
import { EmployeeService } from "./service/employee.service";
import {Employee} from "./model/employee";


function actionCellRenderer(params) {
  let eGui = document.createElement("div");

  let editingCells = params.api.getEditingCells();
  // checks if the rowIndex matches in at least one of the editing cells
  let isCurrentRowEditing = editingCells.some((cell) => {
    return cell.rowIndex === params.node.rowIndex;
  });

  if (isCurrentRowEditing) {
    eGui.innerHTML = `
<button  class="action-button update"  data-action="update"> update  </button>
<button  class="action-button cancel"  data-action="cancel" > cancel </button>
`;
  } else {
    eGui.innerHTML = `
<img class="action-button edit"  data-action="edit" alt="Edit" width="16px" height="16px" src="../assets/edit.png">
&nbsp;&nbsp;
<img class="action-button delete" data-action="delete" alt="Delete" width="16px" height="16px" src="../assets/delete.png"">
`;
  }

  return eGui;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'assignment';

  @ViewChild('myGrid') myGrid: AgGridAngular;

  public gridOptions: Partial<GridOptions>;
  public gridApi;
  public gridColumnApi;
  public columnDefs;
  public cacheOverflowSize;
  public maxConcurrentDatasourceRequests;
  public infiniteInitialRowCount;
  userSubscriber: Subscription;

  rowData: any;

  functions: string[];
  pendingActionIndex: number;
  pendingActionEmployee: Employee;

  minSalary: string;
  maxSalary: string;

  constructor(
    private employee: EmployeeService
  ) {

    this.columnDefs = [
      { headerName: 'Id', width: 150, field: 'id', sortable: true, resizable:true, headerClass: 'ag-center-aligned-header' },
      { headerName: 'Name', field: 'name', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Login', field: 'login', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Salary', field: 'salary', sortable: true, filter: 'agNumColumnFilter' },
      {
        headerName: "Action",
        minWidth: 150,
        cellRenderer: actionCellRenderer,
        editable: false,
        colId: "action"
      }
    ];

    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 2;

    this.gridOptions = {
      headerHeight: 45,
      rowHeight: 30,
      cacheBlockSize: 20,
      paginationPageSize: 20,
      rowModelType: 'clientSide',
    }

    this.functions = ['Function 1', 'Function 2','Function 3','Function 4','Function 5'];
    this.pendingActionEmployee = {id: "", login: "", name: "", salary: 0};
    this.minSalary = '0';
    this.maxSalary = '10000';
  }

  onGridReady(params) {
    console.log('On Grid Ready');

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.searchEmployees()
  }

  searchEmployees() {
    this.employee.getEmployees({'minSalary':this.minSalary, 'maxSalary':this.maxSalary, 'offset':0, 'limit':20, 'sort': '+id'})
      .subscribe(data => {
        console.log(data);
        this.rowData = data['results'];
      });
  }

  onPaginationChanged() { }

  ngOnInit() { }

  onCellClicked(params) {
    if (params.column.colId === "action" && params.event.target.dataset.action) {
      let action = params.event.target.dataset.action;

      if (action === "edit") {
        console.log("Editing " + params.rowIndex);
        this.pendingActionEmployee = params.node.data;
        this.pendingActionIndex = params.rowIndex;
        document.getElementById('id01').style.display='block';
      }

      if (action === "delete") {
        console.log("Deleting " + params.rowIndex);
        this.pendingActionEmployee = params.node.data;
        this.pendingActionIndex = params.rowIndex;
        document.getElementById('id02').style.display='block'
      }
    }
  }

  confirmDelete() {
    console.log("Confirmed deletion. " + this.pendingActionEmployee.id);
    this.rowData.splice(this.pendingActionIndex, 1);
    this.gridApi.setRowData(this.rowData);
    this.employee.deleteEmployee(this.pendingActionEmployee.id).subscribe();
  }

  onEditSave() {
    this.rowData[this.pendingActionIndex] = this.pendingActionEmployee;
    this.gridApi.setRowData(this.rowData);
    this.employee.updateEmployee(JSON.stringify(this.pendingActionEmployee)).subscribe();
  }

  showError (error) {
    document.getElementById('error_message').innerText = error;
    document.getElementById('id03').style.display='block';
  }

  showSuccess (msg) {
    document.getElementById('success_message').innerText = msg;
    document.getElementById('id04').style.display='block';
  }

}
