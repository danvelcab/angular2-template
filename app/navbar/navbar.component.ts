import { Component, OnInit } from '@angular/core';
import { MenuType } from './navbar.metadata';

@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar/navbar.component.html'
})


export class NavbarComponent implements OnInit{
  public menuItems: any[];
  public brandMenu: any;
  isCollapsed = true;

  constructor() {}

  ngOnInit() {
//    this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
//    this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
  }

  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }

  public getMenuItemClasses(menuItem: any) {
    return {
      'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
    };
  }
}

