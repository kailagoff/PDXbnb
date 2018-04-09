import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    component: AboutComponent
  },
  {
    path: '',
    component: FormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
