import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickDetailPage } from './pick-detail';

@NgModule({
  declarations: [
    PickDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PickDetailPage),
  ],
})
export class PickDetailPageModule {}
