import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    },
    {
        path: "about-the-author",
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    },
    {
        path: "single-responsibility-principle",
        loadComponent: () => import('./single-responsibility-principle/single-responsibility-principle.component').then(c => c.SingleResponsibilityPrincipleComponent)
    },
    {
        path: "open-closed-principle",
        loadComponent: () => import('./open-closed-principle/open-closed-principle.component').then(c => c.OpenClosedPrincipleComponent)
    },
    {
        path: "liskov-substitution-principle",
        loadComponent: () => import('./liskov-substitution-pinciple/liskov-substitution-pinciple.component').then(c => c.LiskovSubstitutionPincipleComponent)
    },
    {
        path: "interface-segregation-principle",
        loadComponent: () => import('./interface-segregation-principle/interface-segregation-principle.component').then(c => c.InterfaceSegregationPrincipleComponent)
    },
    {
        path: "dependency-inversion-principle",
        loadComponent: () => import('./dependency-inversion-principle/dependency-inversion-principle.component').then(c => c.DependencyInversionPrincipleComponent)
    }
];
