import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./single-responsibility-principle/single-responsibility-principle.component').then(c => c.SingleResponsibilityPrincipleComponent)
    },
    {
        path: "single-responsibility-principle",
        loadComponent: () => import('./single-responsibility-principle/single-responsibility-principle.component').then(c => c.SingleResponsibilityPrincipleComponent)
    }
];
