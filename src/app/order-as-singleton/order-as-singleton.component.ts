import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-as-singleton',
  templateUrl: './order-as-singleton.component.html',
  styleUrls: ['./order-as-singleton.component.css'],
})
export class OrderAsSingletonComponent implements OnInit {
  @Input() name: string;
  private _price: any;
  @Input() set price(value) {
    this._price = value;
    this.orderService.price = value;
  }

  get price(): number {
    return this._price;
  }

  constructor(public orderService: OrderService) {}

  ngOnInit() {}
}
