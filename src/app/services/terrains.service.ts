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
      imagesTerrain : ['../../assets/images_terrain/a1.png','../../assets/images_terrain/b2.png'],
      cost: 1450000,
      id_User: 1
    },
    {
      id: 2,
      localisation: 'Lakota',
      superficie: 7455,
      imagesTerrain : ['../../assets/images_terrain/b1.png','../../assets/images_terrain/b6.png'],
      cost: 250000,
      id_User: 1
    },
    {
      id: 3,
      localisation: 'Ferkessedougou', 
      superficie: 7455,
      imagesTerrain : ['../../assets/images_terrain/b2.png','../../assets/images_terrain/b6.png'],
      cost: 345000,
      id_User: 1
    },
    {
      id: 3,
      localisation: 'Boundialy', 
      imagesTerrain : ['../../assets/images_terrain/b1.png','../../assets/images_terrain/b4.png'],
      superficie: 15455,
      cost: 1450000,
      id_User: 1
    },
    {
      id: 4,
      localisation: 'Marabadiassa', 
      imagesTerrain : ['../../assets/images_terrain/b3.png','../../assets/images_terrain/b4.png'],
      superficie: 32455,
      cost: 785000,
      id_User: 1
    },
  ];

  private terrainsLouer: any[] = [
    {
      id: 1,
      localisation: 'Ouaragahio',
      superficie: 7455,
      imagesTerrain : ['../../assets/images_terrain/b1.png','../../assets/images_terrain/b4.png'],
      cost: 1450000,
      id_User: 5
    },
    {
      id: 2,
      localisation: 'Bondoukou',
      superficie: 7455,
      imagesTerrain : ['../../assets/images_terrain/b6.png','../../assets/images_terrain/b3.png'],
      cost: 250000,
      id_User: 4
    }
  ];

  get getTerrains() {
    return this.terrains;
  }


  get getTerrainsLouer() {
    return this.terrainsLouer;
  }

  constructor() { }

  getTerrainById(id: number | string){
    return this.terrains[id];
  } 

  getTerrainsLouerById(id: number | string) {
    return this.terrainsLouer[id];
  }



  louerTerrain(data: any){
    console.log("Vous avez louer ce terrain......");
  }

  buyTerrain(data: any) {
    console.log("Vous avez acheter ce terrain.....");
  }


  searchTerrain(keyWork: any) {
    console.log('Vous chercher un terrain à ....' + keyWork);
  }


}
