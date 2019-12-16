import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PermisService {

  baseUrl = 'https://backend-agri-connect.herokuapp.com/api/v1';

  private _etatAvancementPermis = 1;

  constructor(
    private _httpClient: HttpClient
  ) { }



  get getEtatAvancementPermis() {
    return this._etatAvancementPermis;
  }
   
  set ajouterUnNouveauEtat(etat) {
    this._etatAvancementPermis = etat;
  }

  //Get permis info 
  //all data in the permis and show it
  //Don't forget to set the color of the buton and if it lust be checked or not 

  getPermisById(id) {
    return this._httpClient.get(this.baseUrl + '/permis/'+id);
  }



  addPermis(data) {
    return this._httpClient.get(this.baseUrl + '/permis/demande', data);
  }

  getAllPermis(data) {
    return this._httpClient.get(this.baseUrl + '/permis', data);
  }

  
}
