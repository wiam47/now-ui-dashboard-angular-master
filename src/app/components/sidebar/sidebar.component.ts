import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
    { path: '/icons', title: 'Subscriptions',  icon:'education_atom', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    { path: '/maps', title: 'Wallet',  icon:'location_map-big', class: '' },
    { path: '/typography', title: 'Join our community',  icon:'text_caps-small', class: '' },
    { path: '/table-list', title: 'Help',  icon:'design_bullet-list-67', class: '' },
    { path: '/upgrade', title: 'Log Out',  icon:'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
