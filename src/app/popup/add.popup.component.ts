import { Component } from "@angular/core";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-popup-add',
  templateUrl: './add.popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class AddPopupComponent {

  constructor(
    public app: AppComponent
  ) {
  }

  onAddSave () {
    document.getElementById('id00').style.display='none'
    this.app.onAddSave();
  }

}
