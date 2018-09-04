import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PultComponent } from './components/pult/pult.component';
import { ScreenComponent } from './components/screen/screen.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PultComponent, ScreenComponent],
  exports : [PultComponent,ScreenComponent]
})
export class CoreModule { }
