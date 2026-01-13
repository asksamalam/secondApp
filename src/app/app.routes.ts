import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home').then((m) => m.Home)
        },
    },
    {
        path:'todos',
        loadComponent: () => {
            return import('./todos/todos').then((m) => m.Todos)
        },
    },
    {
        path:'form',
        loadComponent: () => {
            return import('./form/form').then((m) => m.Form)
        },
    },
    {
        path:'user-list',
        loadComponent: () => {
            return import('./user-list/user-list').then((m) => m.UserList)
        },
    },
];
