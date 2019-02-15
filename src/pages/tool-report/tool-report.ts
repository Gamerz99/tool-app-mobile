import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-tool-report',
  templateUrl: 'tool-report.html',
})
export class ToolReportPage {
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
    this.service.monthly_log(this.userdata.id).subscribe(res => {
      this.result = res.logs;
      loading.dismiss();
    }, error => {
      loading.dismiss();
    })
  }

}
