import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicationConfig } from '@angular/core';
import { ListEventComponent } from './list-event/list-event.component';
import { AdministratorComponent } from './administrator/administrator.component';

export const routes: Routes = [    
    {
        path:'',
        redirectTo: 'list-events',
        pathMatch: 'full'
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path: 'list-events',
        component: ListEventComponent
    },
    {
        path: 'admin',
        component: AdministratorComponent
    }
];