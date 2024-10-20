import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    }
];