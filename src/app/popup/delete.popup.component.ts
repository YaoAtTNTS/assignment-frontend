import { Component } from "@angular/core";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-popup-delete',
  templateUrl: './delete.popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class DeletePopupComponent {

  constructor(
    public app: AppComponent
  ) {
  }

  onDeleteYes () {
    document.getElementById('id02').style.display='none'
    this.app.onDeleteConfirmed();
  }

  onDeleteNo () {
    document.getElementById('id02').style.display='none';
  }

}
