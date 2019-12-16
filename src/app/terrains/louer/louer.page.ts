import { Component, OnInit } from '@angular/core';
import { TerrainsService } from 'src/app/services/terrains.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-louer',
  templateUrl: './louer.page.html',
  styleUrls: ['./louer.page.scss'],
})
export class LouerPage implements OnInit {
  terrains: any[];
  
  constructor(
    private _terrainService: TerrainsService,
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.terrains = this._terrainService.getTerrains;

    this._activateRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap.get('terrainId'))

      if (!paramMap.has('terrainId')) {
        // this._navController.navigateBack('/terrains');
        // return;
      }
      this.terrains = this._terrainService.getTerrainsLouerById(paramMap.get('terrainId'));

      console.log(this.terrains);
    });
  }


  onSubmit(louerTerrainForm: NgForm) {
    console.log(louerTerrainForm.value);
    if(!louerTerrainForm.value.concentement_location && !louerTerrainForm.value.concentement_location){
      //Vous devez cocher 
      return;
    }
    let newTerrainlocation =  {
      firstname : louerTerrainForm.value.firstname,
      lastname: louerTerrainForm.value.lastname,
      telephone : louerTerrainForm.value.telephone,
      concentement_location : louerTerrainForm.value.concentement_location,
      concentement_payement: louerTerrainForm.value.concentement_payement,
      terrain: this.terrains
    };
    console.log(newTerrainlocation);
    this._terrainService.buyTerrain(newTerrainlocation);
    this._router.navigateByUrl('/terrains/liste-user-terrain')
  }
}
