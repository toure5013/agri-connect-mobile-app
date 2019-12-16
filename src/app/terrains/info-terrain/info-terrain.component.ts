import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-terrain',
  templateUrl: './info-terrain.component.html',
  styleUrls: ['./info-terrain.component.scss'],
})
export class InfoTerrainComponent implements OnInit {

  @Input() selectedTerrain;
  @Input() typeAffaire: 'achat' | 'location';

  images: string[] = [
    "../../assets/back.jpg",
    // "../../assets/back3.jpg",
    "../../assets/back.jpg",
  ];

  constructor(
    private _navParams: NavParams,
    private _modalController: ModalController,
    private _router: Router
  ) { }
  
  ngOnInit() {
    // this.selectedTerrain =  this._navParams.get('selectedTerrain');
    // console.log(this.selectedTerrain);
  }

  ionViewDidEnter() {
    console.log(this.typeAffaire);
    console.log(this.selectedTerrain);
  }

  onCancel() {
    this._modalController.dismiss(null, 'cancel', 'infoTerrain')//we use the id if have mulitple modal and we want ot close only this, ether we don't put id and it'll close all modal
      .then();
  }

  onbuy() {
    this.onCancel();
    let url = "/terrains/acheter/" + this.selectedTerrain.id;
    this._router.navigateByUrl(url);
  }

  onLocation() {
    this.onCancel();
    let url = "/terrains/louer/" + this.selectedTerrain.id;
    this._router.navigateByUrl(url);
  }

}
