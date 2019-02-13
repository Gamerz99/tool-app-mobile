import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Logging Out'
    });
    loading.present();
    localStorage.clear();
    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.setRoot(LoginPage);
    }, 3000);
  }

}
