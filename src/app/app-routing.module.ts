import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "@app/pages/login/login.component";
import { HomeComponent } from "@app/pages/home/home.component";
import { AuthGuard } from "@app/auth-guard/auth.guard";
import { UserComponent } from "@app/pages/user/user.component";

import { HomeResolverService } from "@app/services/home-resolver.service";
import { WebSocketComponent } from "@app/pages/web-socket/web-socket.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent, resolve: { data: HomeResolverService} },
      { path: 'user', component: UserComponent },
      { path: 'websocket', component: WebSocketComponent},
      { path: 'lazyLoading-module', loadChildren: () => import('./modules/lazyloading/lazyloading.module').then(m => m.LazyloadingModule)}
      //{ path: 'clientes/listagem/detalhes/:id', component: ClientDatailComponent },
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
