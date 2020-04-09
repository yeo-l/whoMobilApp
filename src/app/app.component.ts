import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {DataloadService} from "./services/dataload.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar,
    private dataLoadService: DataloadService, private http: HttpClient)
  {
    this.initializeApp();
    this.platform.ready().then(() => {
      this.dataLoadService.createDB();
    }).catch(error => {
      console.log(error);
    })


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
