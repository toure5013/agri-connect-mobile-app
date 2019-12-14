import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.page.html',
  styleUrls: ['./deconnexion.page.scss'],
})
export class DeconnexionPage implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._authService.logout();
    this._router.navigateByUrl('home');
  }

  ionViewWillEnter() {
    this._authService.logout();
    this._router.navigateByUrl('home');
  }  
}
