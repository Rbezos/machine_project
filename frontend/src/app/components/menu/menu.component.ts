import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu_elements: any[] = [];

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.utilsService.getMenuElements().subscribe(
      data => {
        this.menu_elements = data;
        let position = 8;
        this.menu_elements.forEach(element => {
          element.position = position;
          position += 4.5;
          console.log(element);
        });
      },
      error => {
        console.error('Error al obtener elementos del menú', error);
      }
    );
  }

  toggleMenu(): void {
    const menuButton = document.querySelector('.menu_button');
    const menuItems = document.querySelectorAll('.menu_items');
  
    if (menuButton?.classList.contains('active')) {
      menuButton.classList.remove('active');
      menuItems.forEach(element => {
        element.classList.remove('active');
      });
    } else {
      menuButton?.classList.add('active');
      menuItems.forEach(element => {
        element.classList.add('active');
      });
    }
  }
  

}
