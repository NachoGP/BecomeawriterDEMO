import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './web/main/main.component';
import { LoginkidsComponent } from './web/loginkids/loginkids.component';
import { MainModule } from './web/main/main.module';
import { LoginComponent } from './web/login/login.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'selectage', loadChildren: () => import('./web/choose-age/choose-age.module').then( m => m.ChooseAgeModule)},
  { path: 'loginkids', component: LoginkidsComponent, loadChildren: () => import('./web/loginkids/loginkids.module').then(m => m.LoginkidsModule)},
  { path: 'login', component: LoginComponent, loadChildren: () => import('./web/login/login.module').then( m => m.LoginModule) },
  { path: 'logintweens', loadChildren: () => import('./web/logintweens/logintweens.module').then( m => m.LogintweensModule) },
  { path: 'registerkids', loadChildren: () => import('./web/registerkids/registerkids.module').then( m => m.RegisterkidsModule) },
  { path: 'register', loadChildren: () => import('./web/register/register.module').then( m => m.RegisterModule) },
  { path: 'politica', loadChildren: () => import('./web/politica/politica.module').then( m => m.PoliticaModule) },
  { path: 'preLogin', pathMatch: 'full', loadChildren: () => import('./pages/preloader/preloader.module').then( m => m.PreloaderModule) },
  { path: 'newprofilekids/:id', loadChildren: () => import('./pages/kids/newprofilekids/newprofilekids.module').then( m => m.NewprofilekidsModule) },
  { path: 'newprofile/:id', loadChildren: () => import('./pages/adults/newprofile/newprofile.module').then( m => m.NewprofileModule)},
  { path: 'editstorykids/:id', loadChildren: () => import('./pages/kids/editstorieskids/editstorieskids.module').then( m => m.EditstorieskidsModule)},
  { path: 'editstory/:id', loadChildren: () => import('./pages/adults/editstories/editstories.module').then( m => m.EditstoriesModule)},
  { path: 'readstory/:id', loadChildren: () => import('./pages/adults/readstory/readstory.module').then( m => m.ReadstoryModule)},
  { path: 'proposal', loadChildren: () => import('./pages/adults/proposal/proposal.module').then( m => m.ProposalModule)},
  { path: 'proposalkids', loadChildren: () => import('./pages/kids/proposalkids/proposalkids.module').then( m => m.ProposalkidsModule)},
  { path: 'readstorykids/:id', loadChildren: () => import('./pages/kids/readstorykids/readstorykids.module').then( m => m.ReadstorykidsModule)},
  { path: 'selecttimekids', loadChildren: () => import('./pages/kids/selecttimekids/selecttimekids.module').then( m => m.SelecttimekidsModule)},
  { path: 'selecttime', loadChildren: () => import('./pages/adults/selecttime/selecttime.module').then( m => m.SelecttimeModule)},
  { path: 'tips-readkids/:id', loadChildren: () => import('./pages/kids/tip-readkids/tip-readkids.module').then( m => m.TipReadkidsModule)},
  { path: 'tipskids', loadChildren: () => import('./pages/kids/tipskids/tipskids.module').then( m => m.TipskidsModule)},
  { path: 'logroskids/:id', loadChildren: () => import('./pages/kids/logroskids/logroskids.module').then( m => m.LogroskidsModule)},
  { path: 'writeboardkids', loadChildren: () => import('./pages/kids/writeboardkids/writeboardkids.module').then( m => m.WriteboardkidsModule)},
  { path: 'writeboard', loadChildren: () => import('./pages/adults/writeboard/writeboard.module').then( m => m.WriteboardModule)},
  { path: 'writeboardpro/:id', loadChildren: () => import('./pages/adults/writeboard-pro/writeboard-pro.module').then( m => m.WriteboardProModule)},
  { path: 'challenges/:id', loadChildren: () => import('./pages/adults/challenges/challenges.module').then( m => m.ChallengesModule)},
  { path: 'allstorieskids', loadChildren: () => import('./pages/kids/allstorieskids/allstorieskids.module').then( m => m.AllstorieskidsModule)},
  { path: 'allstories', loadChildren: () => import('./pages/adults/allstories/allstories.module').then( m => m.AllstoriesModule)},
  { path: 'adminteacher/:id', loadChildren: () => import('./pages/admins/adminteacher/adminteacher.module').then( m => m.AdminteacherModule)},
  { path: 'adminteacher/dashboard', pathMatch: 'full', loadChildren: () => import('./pages/admins/dashboard/dashboard.module').then( m => m.DashboardModule)},
  { path: 'adminsenior/:id', loadChildren: () => import('./pages/admins/adminsenior/adminsenior.module').then( m => m.AdminseniorModule)},
  { path: 'adminsenior/dashboard', pathMatch: 'full', loadChildren: () => import('./pages/admins/dashboard/dashboard.module').then( m => m.DashboardModule)},

  { path: '**', redirectTo: 'page404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
