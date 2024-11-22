import { Component, ElementRef, ViewChild, OnInit, OnDestroy} from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flex-card',
  standalone: true,
  imports: [],
  templateUrl: './flex-card.component.html',
  styleUrl: './flex-card.component.css'
})
export class FlexCardComponent implements OnInit, OnDestroy {

  @ViewChild('modalElement') modalElement!: ElementRef;
  private modalSubscription!: Subscription;

  constructor(private utilsService: UtilsService) {}

  ngOnInit() {
    // Suscribirse al servicio para escuchar el evento
    this.modalSubscription = this.utilsService.showModal$.subscribe(() => {
      if (this.modalElement) {
        if(this.modalElement.nativeElement.style.right == '-40rem') {
          this.modalElement.nativeElement.style.right = '0rem';
        } else {
          this.modalElement.nativeElement.style.right = '-40rem';
        }
      }
    });
  }

  ngOnDestroy() {
    // Desuscribirse para evitar memory leaks
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }
}
