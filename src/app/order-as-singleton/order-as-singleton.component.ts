import { Component, Input, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-as-singleton',
  templateUrl: './order-as-singleton.component.html',
  styleUrls: ['./order-as-singleton.component.css'],
  // 基本上，這裡是沒作用的，因為orderService是signleton，那麼loggerService也會是singleton
  providers: [LoggerService],
})
export class OrderAsSingletonComponent implements OnInit {
  private _price: number;
  private _loggerVersion: string;
  @Input() set price(value: number) {
    this._price = value;
    this.orderService.price = value;
  }

  get price(): number {
    return this._price;
  }

  @Input() set loggerVersion(value: string) {
    this._loggerVersion = value;
    this.orderService.logger.version = value;
  }

  get loggerVersion(): string {
    return this._loggerVersion;
  }

  constructor(public orderService: OrderService) {}

  ngOnInit() {}
}
