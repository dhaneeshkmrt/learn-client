import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { UserService } from './services/user.service';

const routes: Routes = [
  {
    path: '',
    component: ContactmanagerAppComponent,
    children: [
      {
        path: '',
        component: MainContentComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [
    UserService
  ]
})
export class ContactmanagerModule { }
