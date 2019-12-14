import { Component, OnInit, Input } from '@angular/core';
import { PermisService } from '../../services/permis.service';

@Component({
  selector: 'app-etat-permis',
  templateUrl: './etat-permis.page.html',
  styleUrls: ['./etat-permis.page.scss'],
})

export class EtatPermisPage implements OnInit {

  @Input() etatAvancement;

  etapes: any[] = [
    {
       numero : 0,
      color: 'danger', description: 'Envoi de demande de titre foncier'
    },
    {
      numero : 1,
      color: 'danger', description: 'Reception des documents'
    },
    {
      numero : 2,
      color: 'danger', description: 'Payement des frais du certificats'
    },
    {
      numero : 3,
      color: 'danger', description: 'Verification des papiers'
    },
    {
      numero : 4,
      color: 'danger', description: 'Localisation du terrain'
    },
    {
      numero : 5,
      color: 'danger', description: 'Verfication de l\'integrité'
    },
    {
      numero : 6,
      color: 'danger', description: 'Reception par les autorités'
    },
    {
      numero : 7,
      color: 'danger', description: 'Finalisation du papier'
    },
  ];
  complete: boolean = false;
  constructor(
    private _permisService: PermisService
  ) { }

  ngOnInit() {

     let etape = this._permisService.getEtatAvancementPermis;
    //Creer un service pour connaitre létat d'avancement du papier
    for(let i =0;  i < etape ; i++ ) {
       this.etapes[i].color = "success";
       if(i == 6){
         this.complete = true;
       }
    }

  }


  ionViewWillEnter() {
    let etape = this._permisService.getEtatAvancementPermis;
    //Creer un service pour connaitre létat d'avancement du papier
    for(let i =0;  i < etape ; i++ ) {
       this.etapes[i].color = "success";
       if(i == 6){
         this.complete = true;
       }
    }
  }

  onPayement() {
    console.log("Payement...");
  }
}
