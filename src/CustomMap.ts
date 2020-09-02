import { Company } from './Company';
import { User } from './User';
import { Mappable } from './Mappable';
export class CustomMap {
  private map: google.maps.Map;

  constructor(divId: string) {
    this.map = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      animation: google.maps.Animation.DROP,
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.map, marker);
    });
  }
}
