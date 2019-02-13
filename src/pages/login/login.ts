import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {
    email: null,
    password: null
  }

  userdata = {
    name: null,
    email: null,
    id: null,
    phone: null
  }
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
  }

  ionViewDidLoad() {

  }

  login() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Logging in...'
    });
    loading.present();
    this.service.tool_list().subscribe();
    this.service.login(this.credentials).subscribe(res => {
      this.userdata.name = res.user.name;
      this.userdata.id = res.user.id;
      this.userdata.email = res.user.email;
      this.userdata.phone = res.user.phone;
      localStorage.setItem('userdata', JSON.stringify(this.userdata))
      loading.dismiss();
      this.navCtrl.setRoot(HomePage);
    }, error => {
      loading.dismiss();
      console.log(error)
      alert("Invalid Credintials")
    })
  }

}
