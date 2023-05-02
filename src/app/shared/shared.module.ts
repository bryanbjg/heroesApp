import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrorPageComponent
    
  ],
  exports:[
    ErrorPageComponent
  ]
})
export class SharedModule { }
