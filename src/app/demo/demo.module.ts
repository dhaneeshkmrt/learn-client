import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoRoutingModule } from './demo-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component'


@NgModule({
  declarations: [
    ButtonsComponent,
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DemoModule { }
