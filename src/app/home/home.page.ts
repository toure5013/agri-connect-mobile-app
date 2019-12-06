import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  images: string[] = [
    "../../assets/back.jpg",
    // "../../assets/back3.jpg",
    "../../assets/back.jpg",
  ];

  permis = [
    {
      title: "Vente",
      description: "ceci est un permis en vente",
      location: "Gagnoa",
      imageUrl: "../../assets/logo.jpg",
      price: 1230000
    }
  ]
  constructor() { }


}
