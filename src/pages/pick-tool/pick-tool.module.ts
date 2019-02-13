import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickToolPage } from './pick-tool';

@NgModule({
  declarations: [
    PickToolPage,
  ],
  imports: [
    IonicPageModule.forChild(PickToolPage),
  ],
})
export class PickToolPageModule {}
