import { Component } from '@angular/core';

@Component({
  selector: 'fln-u-navigation',
  styleUrls: ['./navigation.component.css'],
  template: `
    <header>
      <nav class="nav-bar">
        <div class="container">
          <div class="nav-main">
            <ul class="header-list">
              <li class="header-list-item">
                <a routerLink="catalog">
                  <img alt="FLN U Logo" class="logo" src="../assets/images/LOGO_TRANSPARENT.png">
                </a>
              </li>
              <li class="header-list-item">
                <a routerLink="catalog" routerLinkActive="active">Catalog</a>
              </li>
              <li class="header-list-item">
                <a routerLink="about" routerLinkActive="active">About</a>
              </li>
            </ul>
          </div>
          <div class="nav-user">
            <ul class="header-list">
              <li class="header-list-item">Hi, <span class="name">{{ name }}</span>!</li>
              <li class="header-list-item"><a id="logout" class="muted">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>  
    </header>
  `
})
export class NavigationComponent {
  name: string = 'Adrian';
}
