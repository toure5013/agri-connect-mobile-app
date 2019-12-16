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

  userData: any[] = [];
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
    },
    {
      title: 'Suivre mes titres fonciers en cours',
      url: '/permis',
      icon: 'eye'
    },  
    {
      title: 'Achats & Location de terrains',
      url: '/terrains',
      icon: "paper-plane"
    },
    {
      title: 'Vendre & Mettre en location',
      url: '/terrains/ajouter', //choisir si c'est pour vendre ou pour faire louer
      icon: "add"
    },
    {
      title: 'Suivre mes achats/locations de terrains',
      url: "/terrains/lister-user-terrain", //Ajouter un terrain à louer
      icon: "flask"
    },
    {
      title: 'Suivre mes payement',
      url: "/payement", //Ajouter un terrain à louer
      icon: "card"
    },
    {
      title: 'Verificer un titre foncier',
      url: '/permis/verification-titre-foncier', //choisir si c'est pour vendre ou pour faire louer
      icon: "add"
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
    this.userData = this._authService.getUserData;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
