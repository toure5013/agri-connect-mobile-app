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
  permis: any = '' || [ ];
  user: any;
  deconnexionButton =  {
    title: 'Deconnexion',
    url: 'auth/deconnexion',
    icon: 'exit'
  };

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
     this.user =  await this._authService.getUserData;
  }

  async getPermis() {
    let id;
    if(this.user){
      id = this.user.id; 
    }else{
      id = 10000000
    }
    await this._permisService.getPermisById(id).subscribe(
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
  
  onNewPermis() {
    console.log("....................");
    this._permisService.ajouterUnNouveauEtat = 2;
    
  }


  onPayement() {
    this._router.navigate(['/payement']);
  }

  
}

