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
  hideCarrusel() {
    const elements = document.querySelectorAll('.button_list_expand');  // HTMLCollectionOf<Element>

    elements.forEach((element) => {
      // Verificamos si el elemento tiene un parentElement válido (y si es un HTMLElement)
      const container = element.parentElement;
      if (container instanceof HTMLElement) {
        if (container.style.bottom === '-22rem') {
          container.style.bottom = '0';
        } else {
          container.style.bottom = '-22rem';
        }
      }
    });

  }
}
