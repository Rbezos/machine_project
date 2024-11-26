import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flex-card',
  standalone: true,
  imports: [],
  templateUrl: './flex-card.component.html',
  styleUrls: ['./flex-card.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class FlexCardComponent implements OnInit, OnDestroy {

  @ViewChild('modalElement') modalElement!: ElementRef;
  private modalSubscription!: Subscription;
  info_machine: any = {};
  id_machine_actual: number = 0;

  constructor(private utilsService: UtilsService) {}

  ngOnInit() {
    // Suscribirse al servicio para escuchar el evento
    this.modalSubscription = this.utilsService.showModal$.subscribe((id: number) => {
      if (this.modalElement) {
        if (this.id_machine_actual !== id) {
          this.loadMachineData(id);
        } else {
          this.toggleModalVisibility();
        }
        this.id_machine_actual = id;
      }
    });
  }

  ngOnDestroy() {
    // Desuscribirse para evitar memory leaks
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }

  // Método para cargar la información de la máquina
  private loadMachineData(id: number): void {
    this.utilsService.getMachine(id).subscribe((data) => {
      this.info_machine = data;
      this.showModal();
    });
  }

  // Método para mostrar el modal
  private showModal(): void {
    if (this.modalElement) {
      this.modalElement.nativeElement.style.right = '0rem';
    }
  }

  // Método para ocultar el modal
  private hideModal(): void {
    if (this.modalElement) {
      this.modalElement.nativeElement.style.right = '-42rem';
    }
  }

  // Método para alternar la visibilidad del modal
  private toggleModalVisibility(): void {
    if (this.modalElement) {
      const currentRight = this.modalElement.nativeElement.style.right;
      if (currentRight === '-42rem') {
        this.showModal();
      } else {
        this.hideModal();
      }
    }
  }
}
