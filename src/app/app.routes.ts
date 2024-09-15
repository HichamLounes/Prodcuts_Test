import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { ProductsListComponent } from './products-list/products-list.component';

export const routes: Routes = [
    {path:'', component : ProductsListComponent},
    {path:'product', component : ProductsListComponent},

    {path:'product', children : [
        {path : 'details', component: DetailsComponent}
    ]},
    
];
