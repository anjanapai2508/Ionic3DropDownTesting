import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { DropDownPage } from '../drop-down/drop-down';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  expandDropdown(myEvent) {
    let popover = this.popoverCtrl.create(DropDownPage,{showBackdrop: true, cssClass:"custom-popover"});
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(popOverData => {
      console.log('popOverData====' + popOverData);
      
    });

}
}
