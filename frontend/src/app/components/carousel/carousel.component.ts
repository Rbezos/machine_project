import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-carousel-ease'
import { ItemButtonListComponent } from '../item-button-list/item-button-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UtilsService } from '../../services/utils.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ItemButtonListComponent, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{

  array_machines: any[] = [];

  constructor(public utilsService: UtilsService) {}

  async ngOnInit() {
    this.utilsService.getMachines().subscribe((data) => {
      this.array_machines = data;
    });
  }

}
