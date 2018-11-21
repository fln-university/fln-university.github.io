import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <fln-u-navigation></fln-u-navigation>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
