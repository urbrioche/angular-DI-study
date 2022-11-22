import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrderService {
  _price?: number;
  constructor() {}

  get price(): number {
    return this._price;
  }

  set price(value) {
    this._price = value;
    console.log('set price in OrderService', this.price);
  }
}
