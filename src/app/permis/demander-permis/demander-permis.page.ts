import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demander-permis',
  templateUrl: './demander-permis.page.html',
  styleUrls: ['./demander-permis.page.scss'],
})
export class DemanderPermisPage implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(_ngForm: NgForm) {
    let localite = _ngForm.value.localite;
    console.log('localité : ' + localite);
    this._router.navigateByUrl('/permis/etat-permis');
  } 
}
