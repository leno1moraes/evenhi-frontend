import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicationConfig } from '@angular/core';
import { ListEventComponent } from './list-event/list-event.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { UserMyEventsComponent } from './user-my-events/user-my-events.component';

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
        path: 'admin/event/:action',
        component: AdministratorComponent
    },
    {
        path: 'admin/event/:action/:id',
        component: AdministratorComponent
    },
    {
        path: 'admin/event/user/:action/:id',
        component: AdministratorComponent
    },
    {
        path: 'myevents/:action',
        component: UserMyEventsComponent
    },
    {
        path: 'myevents/:action/:id',
        component: UserMyEventsComponent
    }     
];