import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from "@app/modules/lazyloading/components/lazy-loading/lazy-loading.component";

const routes: Routes = [
  { path: 'lazyLoading', component: LazyLoadingComponent },
  // Defina outras rotas específicas do módulo, se necessário
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
