import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; // Importar módulos necesarios
import { routes } from './app.routes'; // Solo importar las rutas
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,MenuComponent],  // Aquí solo necesitas RouterModule, no los componentes directamente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
