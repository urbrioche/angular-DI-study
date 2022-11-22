import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-as-transient',
  templateUrl: './order-as-transient.component.html',
  styleUrls: ['./order-as-transient.component.css'],
  // OrderService的Injectable設定雖然是({ providedIn: 'root' })
  // 但這邊有提供，所以就變成transient/per dependency
  providers: [OrderService],
})
export class OrderAsTransientComponent implements OnInit {
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
