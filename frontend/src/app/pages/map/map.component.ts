import { Component, OnInit } from '@angular/core';
import { MapItemComponent } from '../../components/map-item/map-item.component';
import { BottonListComponent } from '../../components/botton-list/botton-list.component';
import { FlexCardComponent } from '../../components/flex-card/flex-card.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MapItemComponent, BottonListComponent, FlexCardComponent],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {


}
