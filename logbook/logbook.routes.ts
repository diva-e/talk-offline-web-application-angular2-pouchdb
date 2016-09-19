import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LogbookListComponent} from "./logbook-list.component";
import {LogbookCreateComponent} from "./logbook-create.component";
import {LogbookUpdateComponent} from "./logbook-update.component";

const logbookRoutes:Routes = [
    {
        path: '',
        component: LogbookListComponent,
        children: [
            {
                path: '',
            },
            {
                path: 'create',
                component: LogbookCreateComponent,
            },
            {
                path: 'update/:id',
                component: LogbookUpdateComponent,
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(logbookRoutes);
