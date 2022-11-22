import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderAsSingletonComponent } from './order-as-singleton/order-as-singleton.component';
import { OrderAsTransientComponent } from './order-as-transient/order-as-transient.component';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    OrderAsSingletonComponent,
    OrderAsTransientComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
