export interface ReuseableMakarker {
  location: {
    lat: number;
    lng: number;
  };
  ModalContent(): string;
}

const MapDiv = document.getElementById("map");

export class CustomMap {
  private customMap: google.maps.Map;
  constructor() {
    this.customMap = new google.maps.Map(MapDiv, {
      zoom: 1,
      center: {
        lat: 24.7136,
        lng: 46.6753
      }
    });
  }

  addMarker(marker: ReuseableMakarker): void {
    const MARKER = new google.maps.Marker({
      map: this.customMap,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng
      }
    });

    MARKER.addListener("click", () => {
      const inforWindow = new google.maps.InfoWindow({
        content: marker.ModalContent()
      });
      inforWindow.open(this.customMap, MARKER);
    });
  }
}
