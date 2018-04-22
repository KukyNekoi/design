import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { BaseComponent } from './base/base.component';

@NgModule({
  imports: [
    CommonModule,
    DesignRoutingModule
  ],
  declarations: [BaseComponent]
})
export class DesignModule { }
