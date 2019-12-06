import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Demander un titre foncier',
      url: '/permis/demander-permis',
      icon: 'add'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(this._authService.logState){
        this.appPages.push(
          {
            title: 'Deconnexion',
            url: 'auth/deconnexion',
            icon: 'exit'
          }
        );
      }
    });
  }

  ionViewWillEnter() {
    if(this._authService.logState){
      this.appPages.push(
        {
          title: 'Deconnexion',
          url: 'auth/deconnexion',
          icon: 'exit'
        }
      );
    }
  }
  ionViewDidEnter() {
    if(this._authService.logState){
      this.appPages.push(
        {
          title: 'Deconnexion',
          url: 'auth/deconnexion',
          icon: 'exit'
        }
      );
    }
  }
}
