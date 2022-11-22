import { Component, Input, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
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
  private _loggerVersion: string;
  private _price: any;
  @Input() set price(value) {
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
