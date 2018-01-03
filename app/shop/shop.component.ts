import { Component, OnInit } from '@angular/core';
import { ShopInterface } from './shopinterface';
import { SHOPDATA } from './shopdata';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  garages: ShopInterface[];

  constructor() { }

  ngOnInit() {
    this.garages = SHOPDATA;
  }

}
