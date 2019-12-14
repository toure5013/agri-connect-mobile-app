import { Component, OnInit } from '@angular/core';
import { TerrainsService } from 'src/app/services/terrains.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-louer',
  templateUrl: './louer.page.html',
  styleUrls: ['./louer.page.scss'],
})
export class LouerPage implements OnInit {
  terrains: any[];
  
  constructor(
    private _terrainService: TerrainsService,
    private _activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.terrains = this._terrainService.getTerrains;

    this._activateRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap)
      if (!paramMap.has('terrainId')) {
        console.log(paramMap.get('terrainId'));
        // this._navController.navigateBack('/terrains');
        // return;
      }
    });
  }

}
