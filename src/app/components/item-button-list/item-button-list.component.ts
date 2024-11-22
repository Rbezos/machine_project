import { Component} from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-item-button-list',
  standalone: true,
  imports: [],
  templateUrl: './item-button-list.component.html',
  styleUrl: './item-button-list.component.css'
})
export class ItemButtonListComponent {

  constructor(private utilsService: UtilsService) { }

  showModal() {
    // Llamar al servicio para activar el cambio de estilo en otro componente
    this.utilsService.triggerModal();
  }
}
