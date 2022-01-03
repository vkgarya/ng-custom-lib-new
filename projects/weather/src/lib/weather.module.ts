import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule { }
