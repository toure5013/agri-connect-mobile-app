import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.page.html',
  styleUrls: ['./payement.page.scss'],
})
export class PayementPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(payementForm: NgForm){
    console.log(payementForm);
  }
}
