import { inject } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'portafolio',
        title: 'Portafolio',
        loadComponent: () => import('./portafolio/portafolio.component').then(m => m.PortafolioComponent),
        children: [
            {
                path: 'home',
                title: 'About Me',
                loadComponent: () => import('./portafolio/pages/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: '**',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'portafolio',
        pathMatch: 'full'
    }
];
