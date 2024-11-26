import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-map-item',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './map-item.component.html',
  styleUrl: './map-item.component.css'
})
export class MapItemComponent implements OnInit{

  array_points: any[] = [];

  constructor(private utilsService: UtilsService) { }

  async ngOnInit() {
    this.utilsService.getMachines().subscribe((data) => {
      this.array_points = data;
    });
    
    // Verificar si estamos en el navegador (donde `window` está disponible)
    if (typeof window !== 'undefined') {
      const L = (await import('leaflet')).default;

      const map = L.map('map').setView([41.648849, -4.728008], 15); // Coordenadas y zoom inicial

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>'
      }).addTo(map);

      const markers = this.array_points.map(point => {
        let corx = parseFloat(point.corx);
        let cory = parseFloat(point.cory);
        const marker = L.marker([corx, cory]).addTo(map);
        marker.bindPopup(point.name);
        return marker;
      });


    }
  }
}
