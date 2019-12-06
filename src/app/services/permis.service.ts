import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PermisService {
  baseUrl = 'https://backend-agri-connect.herokuapp.com';

  private _etatAvancementPermis = 2;

  constructor(
    private _httpClient: HttpClient
  ) { }



  get etatAvancementPermis() {
    return this._etatAvancementPermis;
  }
   
  set ajouterUnNouveauEtat(etat) {
    this._etatAvancementPermis = etat;
  }

  //Get permis info 
  //all data in the permis and show it
  //Don't forget to set the color of the buton and if it lust be checked or not 

  getPermisById(id) {
    return this._httpClient.get(this.baseUrl + '/api/v1/permis/'+id);
  }



  addPermis(data) {
    return this._httpClient.get(this.baseUrl + '/api/v1/permis/demande', data);
  }

  getAllPermis(data) {
    return this._httpClient.get(this.baseUrl + '/api/v1/permis', data);
  }

  
}
