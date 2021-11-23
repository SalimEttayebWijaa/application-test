import { Component, OnInit } from '@angular/core';

import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-emplacement',
  templateUrl: './emplacement.component.html',
  styleUrls: ['./emplacement.component.css']
})
export class EmplacementComponent implements OnInit {
  title = 'My first AGM project';
  latitude = 35.678418;
  longitude = 9.809007;

  constructor() { }

  ngOnInit() : void {
   // let loader = new Loader({
   //   apiKey :"AIzaSyDsf0yTyIqDS8MDK0rWoRS7kRkvOPYXPxs"
      
   // }) 
   // loader.load().then(()=> {
    //  new google.maps.Map(document.getElementById("map"),{
     //   center : {lat: 51.233334, lng: 6.78333},
        //zoom : 6
    //  })
   // })

  }
  OnChoseLocation(event) {
    console.log(event) ;
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }



}
