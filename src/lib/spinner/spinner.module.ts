import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import { SpinnerComponent } from '.';



@NgModule({
  declarations: [
    SpinnerComponent
  ],
            imports: [
              CommonModule,
              MatIconModule,
            ],
  exports: [
    SpinnerComponent
  ]
})
export class SpinnerModule { }
