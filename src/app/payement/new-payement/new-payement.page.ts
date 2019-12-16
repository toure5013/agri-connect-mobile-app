import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-payement',
  templateUrl: './new-payement.page.html',
  styleUrls: ['./new-payement.page.scss'],
})
export class NewPayementPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(payementForm: NgForm){
    console.log(payementForm);
  }

}
