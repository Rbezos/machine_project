import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'map', component: MapComponent}
];

export const appRoutingModule = RouterModule.forRoot(routes);

