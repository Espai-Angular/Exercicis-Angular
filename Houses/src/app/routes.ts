import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Pàgina inici',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Pàgina detalls',
  },
];

export default routeConfig;
