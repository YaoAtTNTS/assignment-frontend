import { Component } from "@angular/core";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-popup-success',
  templateUrl: './success.popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class SuccessPopupComponent {

  constructor(
    public app: AppComponent
  ) {
  }
}
