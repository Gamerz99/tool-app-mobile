import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { CallNumber } from '@ionic-native/call-number';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { PickToolPage } from '../pages/pick-tool/pick-tool';
import { PickDetailPage } from '../pages/pick-detail/pick-detail';
import { ReturnToolPage } from '../pages/return-tool/return-tool';
import { ReturnDetailPage } from '../pages/return-detail/return-detail';
import { ToolReportPage } from '../pages/tool-report/tool-report';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LogoutPage,
    PickToolPage,
    PickDetailPage,
    ReturnToolPage,
    ReturnDetailPage,
    ToolReportPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LogoutPage,
    PickToolPage,
    PickDetailPage,
    ReturnToolPage,
    ReturnDetailPage,
    ToolReportPage
  ],
  providers: [
    CallNumber,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServiceProvider
  ]
})
export class AppModule { }
