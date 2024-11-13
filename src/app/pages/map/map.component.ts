import { Component, OnInit } from '@angular/core';
import { MapItemComponent } from '../../components/map-item/map-item.component';
import { BottonListComponent } from '../../components/botton-list/botton-list.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MapItemComponent, BottonListComponent],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {


}
