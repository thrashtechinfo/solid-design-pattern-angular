import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./single-responsibility-principle/single-responsibility-principle.component').then(c => c.SingleResponsibilityPrincipleComponent)
    },
    {
        path: "single-responsibility-principle",
        loadComponent: () => import('./single-responsibility-principle/single-responsibility-principle.component').then(c => c.SingleResponsibilityPrincipleComponent)
    },
    {
        path: "open-closed-principle",
        loadComponent: () => import('./open-closed-principle/open-closed-principle.component').then(c => c.OpenClosedPrincipleComponent)
    }
];
