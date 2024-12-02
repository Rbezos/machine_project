import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../services/utils.service';
import { ItemButtonListComponent } from '../item-button-list/item-button-list.component';

@Component({
  selector: 'app-map-item',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ItemButtonListComponent],
  templateUrl: './map-item.component.html',
  styleUrl: './map-item.component.css',
})
export class MapItemComponent implements OnInit {
  array_points: any[] = [];

  constructor(
    private utilsService: UtilsService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  async ngOnInit() {
    if (typeof window !== 'undefined') {
      const L = (await import('leaflet')).default;

      const map = L.map('map').setView([41.648849, -4.728008], 15); // Coordenadas y zoom inicial

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
      }).addTo(map);

      // Obtener los puntos y añadir los marcadores
      this.utilsService.getMachines().subscribe((data) => {
        this.array_points = data;

        this.array_points.forEach((point) => {
          const corx = parseFloat(point.corx);
          const cory = parseFloat(point.cory);
          const marker = L.marker([corx, cory]).addTo(map);

          // Crear contenedor dinámico
          const popupContainer = document.createElement('div');
          popupContainer.style.height = '100%';
          popupContainer.innerHTML = `
            <div style="height: 40%;">
              <img style="height: 100%; object-fit: cover; width: 100%;" src="${point.img}">
            </div>
            <div style="height: 60%; box-sizing: border-box; padding: 1rem; display: flex; flex-direction: column;justify-content: space-between;">
              <div style="font-size: 1rem; font-weight: 600;">${point.name}</div>
              <div>Tipo: ${point.type}</div>
              <div>Estado: ${point.state}</div>
              <div class="buttons-container" style="display: flex; justify-content: end;"></div>
            </div>
          `;

          // Añadir popup al marcador
          marker.bindPopup(popupContainer);

          // Crear componente dinámico dentro del contenedor
          const buttonsContainer = popupContainer.querySelector('.buttons-container');
          if (buttonsContainer) {
            
            const factory = this.componentFactoryResolver.resolveComponentFactory(ItemButtonListComponent);
            const componentRef = factory.create(this.injector);
            componentRef.instance.id = point.id;

            // Renderizar el componente Angular dentro del contenedor
            this.viewContainerRef.insert(componentRef.hostView);
            buttonsContainer.appendChild(componentRef.location.nativeElement);
          }
          
        });
      });
    }
  }
}
