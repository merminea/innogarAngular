import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../sections/product/product.component';
import { FutureComponent } from '../sections/future/future.component';
import { LandingComponent } from '../sections/landing/landing.component';
import { DescriptionComponent } from '../sections/description/description.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
