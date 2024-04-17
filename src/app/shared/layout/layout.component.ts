import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
    MatListModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  opened = true;

  public links = [
    {
      icon: 'restaurant_menu'
    ,
      label: 'Comidas',
      routerLink: 'food/food-list',
    },
    {
      icon: 'lunch_dining',
      label: 'Crear comida',
      routerLink: 'food/form',
    },
  ];

  public open() {
    if (this.opened) {
      this.opened = !this.opened;
    } else {
      this.opened = !this.opened;
    }
  }
}
