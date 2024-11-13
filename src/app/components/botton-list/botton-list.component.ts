import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';



@Component({
  selector: 'app-botton-list',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './botton-list.component.html',
  styleUrl: './botton-list.component.css'
})
export class BottonListComponent {

}
