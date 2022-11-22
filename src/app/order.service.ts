import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({ providedIn: 'root' })
export class OrderService {
  _price?: number;
  constructor(public logger: LoggerService) {}

  get price(): number {
    return this._price;
  }

  set price(value) {
    this._price = value;
    console.log('set price in OrderService', this.price);
  }
}
