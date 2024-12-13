import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import { NgModel } from '@angular/forms';

export const routes: Routes = [
    { path: 'first-component', component: FirstComponent },
  ];


export class AppRoutingModel{}