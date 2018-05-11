import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DropDownPage } from './drop-down';

@NgModule({
  declarations: [
    DropDownPage,
  ],
  imports: [
    IonicPageModule.forChild(DropDownPage),
  ],
})
export class DropDownPageModule {}
