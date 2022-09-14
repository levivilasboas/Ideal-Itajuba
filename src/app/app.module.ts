import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { Drivers} from '@ionic/storage'
import { IonicStorageModule } from '@ionic/storage-angular';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot({
    driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
  })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite , SQLitePorter],
  bootstrap: [AppComponent],
})
export class AppModule {}
