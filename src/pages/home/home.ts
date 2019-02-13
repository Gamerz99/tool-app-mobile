import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PickToolPage } from '../pick-tool/pick-tool';
import { ReturnToolPage } from '../return-tool/return-tool';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pick() {
    this.navCtrl.push(PickToolPage);
  }

  return() {
    this.navCtrl.push(ReturnToolPage)
  }

}
