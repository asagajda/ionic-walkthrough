import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalkthroughModalPage } from './walkthrough-modal';

@NgModule({
  declarations: [
    WalkthroughModalPage,
  ],
  imports: [
    IonicPageModule.forChild(WalkthroughModalPage),
  ],
})
export class WalkthroughModalPageModule {}
