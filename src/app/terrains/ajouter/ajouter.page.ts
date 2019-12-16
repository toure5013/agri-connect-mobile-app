import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Plugins } from '@capacitor/core';

const { Geolocation, LocalNotifications } = Plugins;



@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(addTerrainForm: NgForm) {
    let city = addTerrainForm.value.city; 
    let price = addTerrainForm.value.price; 
    let typeContrat = addTerrainForm.value.typeContrat; 
    console.log(addTerrainForm.value);
  }

  onGetLocation() {
    const getLocation = new GeolocationExample();
    
    getLocation.getCurrentPosition();
    getLocation.watchPosition();

    LocalNotifications.schedule({
      notifications: [
        {
          title: "Votre position est : ",
          body: JSON.stringify(getLocation.getCurrentPosition()),
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 5) },
          sound: null,
          attachments: null,
          actionTypeId: "",
          extra: null
        }
      ]
    });
  }
 
}

class GeolocationExample {
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    // console.log('Current', coordinates);
    return coordinates;
  }

  watchPosition() {
    var positionGetted;
    const wait = Geolocation.watchPosition({}, (position, err) => {
      console.log(position);
      positionGetted = position;
    });

    return positionGetted;
  }
}