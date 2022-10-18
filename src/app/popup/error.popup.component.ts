import { Component } from "@angular/core";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-popup-error',
  templateUrl: './error.popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class ErrorPopupComponent {

  constructor(
    public app: AppComponent
  ) {
  }

}
