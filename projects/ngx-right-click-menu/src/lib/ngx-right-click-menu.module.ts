import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatListModule,
  MatIconModule,
  MatCardModule,
} from '@angular/material';
import { NgxRightClickMenuComponent } from './ngx-right-click-menu.component';
import { NgxRightClickMenuDirective } from './ngx-right-click-menu.directive';
import { NgxRightClickMenuBackDropComponent } from './ngx-right-click-menu-backdrop.component';

@NgModule({
  declarations: [
    NgxRightClickMenuComponent,
    NgxRightClickMenuDirective,
    NgxRightClickMenuBackDropComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    NgxRightClickMenuComponent,
    NgxRightClickMenuDirective,
  ],
  entryComponents: [
    NgxRightClickMenuComponent,
    NgxRightClickMenuBackDropComponent
  ]
})
export class NgxRightClickMenuModule { }
