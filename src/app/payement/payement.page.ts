import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PayementService } from '../services/payement.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.page.html',
  styleUrls: ['./payement.page.scss'],
})
export class PayementPage implements OnInit {
  payementEffectuers: any;
  constructor(
    private _payementService: PayementService
  ) {

   }

  ngOnInit() {
    let id = 1; // Get connected user id

    this.payementEffectuers = [{
      id: id,
      reference : 'e3sdsd45sd5s'
    } ]
    // this.payementEffectuers = this._payementService.getPaymentByUserId(id);
  }


  
}
