import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TerrainsService } from 'src/app/services/terrains.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-acheter',
  templateUrl: './acheter.page.html',
  styleUrls: ['./acheter.page.scss'],
})
export class AcheterPage implements OnInit {
    concentement_achat : boolean = false;
    concentement_payement: boolean = false;
    terrains: any[] = [];
  constructor(
    private _activateRoute: ActivatedRoute,
    private _terrainService: TerrainsService,
    private _router: Router
  ) { }

  ngOnInit() {
      this._activateRoute.paramMap.subscribe(paramMap => {
        console.log(paramMap.get('terrainId'))

        if (!paramMap.has('terrainId')) {
          // this._navController.navigateBack('/terrains');
          // return;
        }
        this.terrains = this._terrainService.getTerrainById(paramMap.get('terrainId'));

      });
  }

  onSubmit(acheterTerrainForm: NgForm) {
    console.log(acheterTerrainForm.value);
    if(!acheterTerrainForm.value.concentement_achat && !acheterTerrainForm.value.concentement_achat){
      //Vous devez cocher 
      return;
    }
    let newAchat =  {
      firstname : acheterTerrainForm.value.firstname,
      lastname: acheterTerrainForm.value.lastname,
      telephone : acheterTerrainForm.value.telephone,
      concentement_achat : acheterTerrainForm.value.concentement_achat,
      concentement_payement: acheterTerrainForm.value.concentement_payement,
      terrain : this.terrains

    };
    console.log(newAchat);
    this._terrainService.buyTerrain(newAchat);
    this._router.navigateByUrl('/terrains/liste-user-terrain')
  }
}
