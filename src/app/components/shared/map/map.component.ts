import { Component, Input, ElementRef  } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Input() latitude: string;
  @Input() longitude: string;

   map: L.Map;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initializeMap();
    setTimeout(()=>{this.map.invalidateSize()},100)
  }

   initializeMap() {
      this.map = L.map(this.el.nativeElement.querySelector('#map')).setView([ Number(this.latitude), Number(this.longitude)], 2);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(this.map);

      L.marker([Number(this.latitude), Number(this.longitude)], {
        icon: L.divIcon({
          className: 'leaflet-div-icon',
          iconSize: [12, 12],
          html: '<div style="width: 12px; height: 12px; background-color: red; border-radius: 50%;"></div>'
        })
      }).addTo(this.map);
      this.map.invalidateSize()
    }
}
