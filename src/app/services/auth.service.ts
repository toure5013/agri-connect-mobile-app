import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*----------------------------------------------------------------------------- 
                              PROPRIETIES
 /*----------------------------------------------------------------------------- */
  baseUrl = 'https://backend-agri-connect.herokuapp.com/api/v1';

  private _userAuthenticated: boolean = true;
  private _userData: any[] = [];


  constructor(
    private _httpClient: HttpClient
  ) { }



/*----------------------------------------------------------------------------- 
                                 GETTER AND SETTER
 /*----------------------------------------------------------------------------- */
  get getLogState(): boolean {
    /**
     * This is a getter it used for getting propriety state, 
     * that permit to know if user is loggin or not
     */
    return this._userAuthenticated;
  }

  

   setLogState(authState: boolean){
    this._userAuthenticated = authState;
  }

  get getUserData() {
    /**
     *  This use to get user stocked data from application cache
     */
     return this._userData;
  }

   setUserData(data: any) {
    /**
     *  This use to stock user data in application cache
     */
     this._userData = data;
  }

  


 /*----------------------------------------------------------------------------- 
                                      METHOD
 /*----------------------------------------------------------------------------- */
  register(data) {
    return this._httpClient.post(this.baseUrl + '/user',data);
  }


  login(data) {
    return this._httpClient.post(this.baseUrl + '/connexion',data);
  }

  logout() {
    this._userAuthenticated = false;
  }

  

}
