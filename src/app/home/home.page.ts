import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  imageElement: any ="";
  isLoggin: boolean = false;
  serviceElements: any[] = [
    {
      title: 'Demander un titre foncier',
      url: '/permis', 
      icon: "grid"
    },
    {
      title: 'Acheter/Louer un terrain',
      url: '/terrains',
      icon: "card"
    },
    {
      title: 'Vendre un terrain',
      url: '/terrains/ajouter', //choisir si c'est pour vendre ou pour faire louer
      icon: "card"
    },
    {
      title: 'Verifier l\'authenticité d\'un papier',
      url: "/permis/verification-titre-foncier",  //liste des terrains à louer
      icon: "card"
    },
    {
      title: 'Vendre/Mettre en location un terrain',
      url: "/terrains/ajouter", //Ajouter un terrain à louer
      icon: "card"
    },
  ];

  images: string[] = [
    "../../assets/back.jpg",
    "../../assets/images_terrain/a1.png",
    "../../assets/images_terrain/b3.png",
    "../../assets/images_terrain/b6.png",
  ];

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggin = this._authService.getLogState;
  }


  ionViewDidEnter() {
    this.isLoggin = this._authService.getLogState;
  }




  onClickElement(i:number) {
    let url =  [this.serviceElements[i].url];
   this._router.navigate(url);
  }
}
