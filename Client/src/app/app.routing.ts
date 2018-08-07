import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProductComponent } from './product/product.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuardService} from './authguard/auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'product',component: ProductComponent },
    // { path: 'detail/:id', component: HeroDetailComponent },
     { path: 'home', component: DashboardComponent }
  ];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})


export class AppRoutingModule{}

//canActivate:[AuthGuardService]