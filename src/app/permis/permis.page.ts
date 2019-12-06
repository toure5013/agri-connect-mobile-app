import { Component, OnInit } from '@angular/core';
import { PermisService } from '../services/permis.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permis',
  templateUrl: './permis.page.html',
  styleUrls: ['./permis.page.scss'],
})
export class PermisPage implements OnInit {
  message: string = '';
  permis: any;
  user: any;
  constructor(
    private _permisService: PermisService,
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getUserdata();
    this.getPermis
  }

  ionViewWillEnter() {
    this.getUserdata();
    this.getPermis();
  }

  async getUserdata() {
     this.user =  await this._authService.user;
  }

  async getPermis() {
    await this._permisService.getPermisById(this.user.id).subscribe(
      (data: any)=>{
        console.log(data);
        if(data.status != 200 ){
          this.message = 'pas de permis';
          console.log(this.message);
        }else{
          this.permis = data.message;
        }
      },
      (error)=>{
        console.log(error);
        this.message = 'Une erreur s\'est produite réessayez' ;
      });
  }

  onVoirEtat() {
    this._permisService.ajouterUnNouveauEtat(7);
  }
  
  onNouveauPermis() {
    this._permisService.ajouterUnNouveauEtat(2);
  }

  
}

