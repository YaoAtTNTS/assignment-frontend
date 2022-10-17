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

@NgModule({
  declarations: [
    AppComponent,
    EditPopupComponent,
    DeletePopupComponent,
    SuccessPopupComponent,
    ErrorPopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
