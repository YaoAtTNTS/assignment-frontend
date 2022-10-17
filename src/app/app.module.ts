import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AgGridModule} from "ag-grid-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
