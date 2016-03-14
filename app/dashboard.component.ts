import { Component, OnInit } from 'angular2/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  template: `
    <h3>My Dashboard</h3>
  `,
  templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
}