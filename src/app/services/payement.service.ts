import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayementService {
  private payements: any[] = [

    {
      id : 1,
      reference : "1054ssKgd445BNGHs547",
      amount : 10000,
      date: '11-03-2019',
      phone_number : 44334233,
      user_id: 1
    }

];

  // get getPayements() {
  //   return this.payements;
  // }

  constructor() { }

  getPaymentByUserId(id: number){
    for(let i=0; i<this.payements.length; i++){
      if(this.payements[i].user_id === id){
        return this.payements[i];
      }
    }
    return {
      code : 404,
      message : "Payement pour ce utilisateur inexistant"
    }
  }

  addPayement(newPayement: any[]) {
    this.payements.push(newPayement);
  }

}
