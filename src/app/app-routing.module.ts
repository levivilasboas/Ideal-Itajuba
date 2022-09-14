import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'simulacao',
    loadChildren: () => import('./simulacao/simulacao.module').then( m => m.SimulacaoPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contact-list/contact-list.module').then( m => m.ContactListPageModule)
  },
  {
    path: 'contacts/new',
    loadChildren: () => import('./contacts/contact-form/contact-form.module').then( m => m.ContactFormPageModule)
  },
  {
    path: 'contacts/edit/:id',
    loadChildren: () => import('./contacts/contact-form/contact-form.module').then( m => m.ContactFormPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
