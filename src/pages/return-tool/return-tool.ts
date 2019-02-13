import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ReturnDetailPage } from '../return-detail/return-detail';

@IonicPage()
@Component({
  selector: 'page-return-tool',
  templateUrl: 'return-tool.html',
})
export class ReturnToolPage {
  result: any;
  userdata: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public service: ServiceProvider) {
    if (localStorage.getItem('userdata')) {
      this.userdata = JSON.parse(localStorage.getItem('userdata'));
    }
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loading...'
    });
    loading.present();
    this.service.assign_list(this.userdata.id).subscribe(res => {
      this.result = res.assigns;
      loading.dismiss();
    }, error => {
      loading.dismiss();
    })
  }

  return(id) {
    this.navCtrl.push(ReturnDetailPage, { id: id })
  }

}
