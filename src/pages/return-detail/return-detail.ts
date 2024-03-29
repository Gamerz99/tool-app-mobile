import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-return-detail',
  templateUrl: 'return-detail.html',
})
export class ReturnDetailPage {
  stock: any;
  id: any;
  userdata: any;
  data = {
    employee: null,
    barcode: null
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public service: ServiceProvider) {
    if (localStorage.getItem('userdata')) {
      this.userdata = JSON.parse(localStorage.getItem('userdata'));
    }
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loading...'
    });
    loading.present();
    this.service.stock_item(this.id).subscribe(res => {
      this.stock = res.stock;
      this.data.barcode = res.stock.barcode;
      this.data.employee = this.userdata.id;
      loading.dismiss();
    }, error => {
      loading.dismiss();
    })
  }

  submit() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loading...'
    });
    loading.present();
    this.service.unassign(this.data).subscribe(res => {
      loading.dismiss();
      this.navCtrl.setRoot(HomePage)
      alert("Return Succesfull")
    }, error => {
      loading.dismiss();
      alert("Error")
    })
  }

}
