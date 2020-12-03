import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmericaComponent } from './components/america/america.component';
import { ChileComponent } from './components/america/chile/chile.component';
import { ArgentinaComponent } from './components/america/argentina/argentina.component';
import { UruguayComponent } from './components/america/uruguay/uruguay.component';
import { EuropaComponent } from './components/europa/europa.component';
import { EspanaComponent } from './components/europa/espana/espana.component';
import { FranciaComponent } from './components/europa/francia/francia.component';
import { ItaliaComponent } from './components/europa/italia/italia.component';

@NgModule({
  declarations: [
    AppComponent,
    AmericaComponent,
    ChileComponent,
    ArgentinaComponent,
    UruguayComponent,
    EuropaComponent,
    EspanaComponent,
    FranciaComponent,
    ItaliaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
