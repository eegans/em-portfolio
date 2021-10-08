import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { InternalComponent } from './portfolio/internal/internal.component';
import { DesignProcessComponent } from './portfolio/design-process/design-process.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'resume', component: ResumeComponent},
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'internal', component: InternalComponent},
    { path: 'design-process', component: DesignProcessComponent }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule {}
