import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import {
  RouterLink, RouterOutlet
} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Foto exterior de {{ housingLocation.name }}"
        title="Foto exterior de {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Més detalls...</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
