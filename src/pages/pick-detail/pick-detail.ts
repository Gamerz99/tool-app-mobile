import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { CallNumber } from '@ionic-native/call-number';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-pick-detail',
  templateUrl: 'pick-detail.html',
})
export class PickDetailPage {
  stock: any;
  id: any;
  userdata: any;
  data = {
    employee: null,
    barcode: null
  }
  button = false;
  constructor(public loadingCtrl: LoadingController, private callNumber: CallNumber, public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
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
      alert("Error")
    })
  }

  submit() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loading...'
    });
    loading.present();
    this.service.assign(this.data).subscribe(res => {
      loading.dismiss();
      this.navCtrl.setRoot(HomePage)
      alert("Pick Succesfull")
    }, error => {
      loading.dismiss();
      alert("Error")
    })
  }

  call() {
    this.callNumber.callNumber(this.stock.phone, true)
  }

  option() {
    if (this.button == false) {
      this.button = true;
    } else {
      this.button = false;
    }
  }
}
