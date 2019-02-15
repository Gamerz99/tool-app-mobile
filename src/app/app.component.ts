import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { PickToolPage } from '../pages/pick-tool/pick-tool';
import { ReturnToolPage } from '../pages/return-tool/return-tool';
import { ToolReportPage } from '../pages/tool-report/tool-report';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  userdata: any;
  rootPage: any;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    if (localStorage.getItem('userdata')) {
      this.userdata = JSON.parse(localStorage.getItem('userdata'));
    }
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Pick Tool', component: PickToolPage },
      { title: 'Return Tool', component: ReturnToolPage },
      { title: 'Tool Report', component: ToolReportPage },
      { title: 'Log Out', component: LogoutPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (localStorage.getItem('userdata')) {
        this.rootPage = HomePage;
      }
      else {
        this.rootPage = LoginPage;
      }
      this.statusBar.styleBlackOpaque();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if (page == HomePage || page == LogoutPage) {
      this.nav.setRoot(page.component);
    } else {
      this.nav.push(page.component);
    }
  }
}
