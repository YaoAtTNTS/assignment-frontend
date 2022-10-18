import { Component } from "@angular/core";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-popup-edit',
  templateUrl: './edit.popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class EditPopupComponent {

  constructor(
    public app: AppComponent
  ) {
  }

  onEditSave () {
    document.getElementById('id01').style.display='none'
    this.app.onEditSaved();
  }

}
