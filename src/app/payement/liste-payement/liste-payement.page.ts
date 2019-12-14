import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-payement',
  templateUrl: './liste-payement.page.html',
  styleUrls: ['./liste-payement.page.scss'],
})
export class ListePayementPage implements OnInit {
  payementEffectuer: any[] = [1];
  constructor() { }

  ngOnInit() {
  }

}
