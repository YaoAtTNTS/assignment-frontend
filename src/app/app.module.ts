import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AgGridModule} from "ag-grid-angular";
import {EditPopupComponent} from "./popup/edit.popup.component";
import {DeletePopupComponent} from "./popup/delete.popup.component";
import {SuccessPopupComponent} from "./popup/success.popup.component";
import {ErrorPopupComponent} from "./popup/error.popup.component";
import {FormsModule} from "@angular/forms";
import {FileUploadModule} from "ng2-file-upload";
import {AddPopupComponent} from "./popup/add.popup.component";

@NgModule({
  declarations: [
    AppComponent,
    AddPopupComponent,
    EditPopupComponent,
    DeletePopupComponent,
    SuccessPopupComponent,
    ErrorPopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
