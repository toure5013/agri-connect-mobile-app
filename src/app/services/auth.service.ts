import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://backend-agri-connect.herokuapp.com';

  private _userAuthenticated: boolean = false;
  private _userData: any[] = [];
  constructor(
    private _httpClient: HttpClient
  ) { }

  get logState() {
    return this._userAuthenticated;
  }
  get user() {
    return this._userData;
  }

  

  loggedIn(state:boolean, data) {
     this._userAuthenticated =  state;
     this._userData = data;
  }

  
  login(data) {
    return this._httpClient.post(this.baseUrl + '/api/v1/connexion',data);
  }

  logout() {
    this._userAuthenticated = false;
  }

  register(data) {
    return this._httpClient.post(this.baseUrl + '/api/v1/user',data);
  }

}
