import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TerrainsService {
  private terrains: any[] = [
    {
      id: 1,
      localisation: 'Gagnoa',
      superficie: 7455,
      cost: 1450000,
      id_User: 1
    },
    {
      id: 2,
      localisation: 'Lakota',
      superficie: 7455,
      cost: 250000,
      id_User: 1
    },
    {
      id: 3,
      localisation: 'Ferkessedougou', 
      superficie: 7455,
      cost: 345000,
      id_User: 1
    },
    {
      id: 3,
      localisation: 'Boundialy', 
      superficie: 15455,
      cost: 1450000,
      id_User: 1
    },
    {
      id: 4,
      localisation: 'Ferkessedougou', 
      superficie: 32455,
      cost: 785000,
      id_User: 1
    },
  ];

  get getTerrains() {
    return this.terrains;
  }
  constructor() { }

  getTerrainById(id: number | string){
    return this.terrains[id];
  } 

  buyTerrain(data: any) {
    console.log("Vous avez acheter ce terrain");
  }

  searchTerrain(keyWork: any) {
    console.log('Vous chercher ....' + keyWork);
  }
}
