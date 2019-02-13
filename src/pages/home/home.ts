import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PickToolPage } from '../pick-tool/pick-tool';

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

}
