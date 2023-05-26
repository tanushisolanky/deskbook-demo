import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CapitalizeDirective } from './directives/capitalize.directive';


@NgModule({
  declarations: [
  CapitalizeDirective

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports:[
    CapitalizeDirective
  ]
})
export class SharedModule { }
