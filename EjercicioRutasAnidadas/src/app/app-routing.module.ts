import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmericaComponent } from './components/america/america.component';
import { ChileComponent } from './components/america/chile/chile.component';
import { ArgentinaComponent } from './components/america/argentina/argentina.component';
import { UruguayComponent } from './components/america/uruguay/uruguay.component';
import { EuropaComponent } from './components/europa/europa.component';
import { EspanaComponent } from './components/europa/espana/espana.component';
import { FranciaComponent } from './components/europa/francia/francia.component';
import { ItaliaComponent } from './components/europa/italia/italia.component';

const routes: Routes = [
  {
    path: 'america',
    component: AmericaComponent,
    children: [
    {
      path: 'chile',
      component: ChileComponent
    },
    {
      path: 'argentina',
      component: ArgentinaComponent
    },
    {
      path: 'uruguay',
      component: UruguayComponent
    }]
  },
  {
    path: 'europa',
    component: EuropaComponent,
    children: [
    {
      path: 'espana',
      component: EspanaComponent
    },
    {
      path: 'francia',
      component: FranciaComponent
    },
    {
      path: 'italia',
      component: ItaliaComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
