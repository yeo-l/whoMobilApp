import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 public pages = [
   {title: 'Home',url: '/menu/home',icon:'share'},
   {title: 'Completude',url: '/menu/completude',icon:'podium'},
   {title: 'Time Consisty',url: '/menu/time',icon:'share'},
   {title: 'Data Consisty',url: '/menu/data',icon:'share'},
   {title: 'Data analytic',url: '/menu/analytic',icon:'share'},
   {title: 'Setting',url: '/menu/parametrage',icon:'settings'},
   {title: 'logOut', url: '/login',icon:'log-out'
    }
  ]
  constructor(private router: Router) {}

  ngOnInit() {}
  onMenuItem(p){
    this.router.navigateByUrl(p.url);
  }
}