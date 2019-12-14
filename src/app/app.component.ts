import { Component, Input } from '@angular/core';

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
  @Input() newMenuElement;

  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Liste de mes demandes de certificats',
      url: '/permis',
      icon: 'albums'
    },
    {
      title: 'Demander un titre foncier',
      url: '/permis/demander-permis',
      icon: 'add'
    },
    {
      title: 'Acheter un terrain',
      url: '/terrains',
      icon: "card"
    },
    {
      title: 'Lister mes terrains',
      url: '/terrain/liste-user-terrain',
      icon: "grid"
    },
    {
      title: 'Vendre un terrain',
      url: '/terrains/ajouter', //choisir si c'est pour vendre ou pour faire louer
      icon: "card"
    },
    {
      title: 'Louer un terrain',
      url: "/terrains/louer",  //liste des terrains à louer
      icon: "card"
    },
    {
      title: 'Mettre terrain en location',
      url: "/terrains/ajouter", //Ajouter un terrain à louer
      icon: "card"
    },
    {
      title: 'Deconnexion',
      url: 'auth/deconnexion',
      icon: 'exit'
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
    });
  }

}
