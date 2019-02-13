import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { PickDetailPage } from '../pick-detail/pick-detail';

@IonicPage()
@Component({
  selector: 'page-pick-tool',
  templateUrl: 'pick-tool.html',
})
export class PickToolPage {
  data = {
    tool: null,
    brand: null
  }
  tools: any;
  brands: any;
  result: any;
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loading...'
    });
    loading.present();
    this.service.tool_list().subscribe(res => {
      this.tools = res.tools;
      loading.dismiss();
    }, error => {
      loading.dismiss();
      alert("Error")
    })
  }

  brand(event) {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loading...'
    });
    loading.present();
    this.service.brand_list(event).subscribe(res => {
      this.brands = res.brands;
      loading.dismiss();
    }, error => {
      loading.dismiss();
      alert("Error")
    })
  }

  search() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loading...'
    });
    loading.present();
    this.service.stock_list(this.data.tool, this.data.brand).subscribe(res => {
      this.result = res.stocks;
      loading.dismiss();
    }, error => {
      loading.dismiss();
      alert("Error")
    })
  }

  clear() {
    this.result = null;
  }

  pick(id) {
    this.navCtrl.push(PickDetailPage, { id: id })
  }
}
