import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {SpinnerComponent} from './spinner.component';

@NgModule({
            declarations: [
              SpinnerComponent,
            ],
            imports     : [
              CommonModule,
              MatIconModule,
            ],
            exports     : [
              SpinnerComponent,
            ],
          })
export class SpinnerModule {}
