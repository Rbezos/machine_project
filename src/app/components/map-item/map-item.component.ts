import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-item',
  standalone: true,
  imports: [],
  templateUrl: './map-item.component.html',
  styleUrl: './map-item.component.css'
})
export class MapItemComponent implements OnInit{
  async ngOnInit() {
    // Verificar si estamos en el navegador (donde `window` está disponible)
    if (typeof window !== 'undefined') {
      const L = (await import('leaflet')).default;

      const map = L.map('map').setView([41.6551697, -4.7251181], 14); // Coordenadas de Londres y zoom inicial

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>'
      }).addTo(map);

      const array_points = [
        {
          id: 1,
          name: "Punto 1: Plaza de Toros de Valladolid",
          x: 41.655881,
          y: -4.755942,
        },
        {
          id: 2,
          name: "Punto 2: Parque de la Castellana",
          x: 41.640540,
          y: -4.761170,
        },
        {
          id: 3,
          name: "Punto 3: Estadio José Zorrilla",
          x: 41.652612,
          y: -4.781186,
        },
        {
          id: 4,
          name: "Punto 4: Puente Colgante",
          x: 41.658779,
          y: -4.790101,
        }
      ];
      const markers = array_points.map(point => {
        const marker = L.marker([point.x, point.y]).addTo(map);
        marker.bindPopup(point.name);
        return marker;
      });


    }
  }
}
