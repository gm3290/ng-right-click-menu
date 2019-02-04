import { NgModule } from '@angular/core';
import { NgxRightClickMenuComponent } from './ngx-right-click-menu.component';
import { NgxRightClickMenuDirective } from './ngx-right-click-menu.directive';
import { MatDialogModule } from '@angular/material';
import {CommonModule} from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    NgxRightClickMenuComponent,
    NgxRightClickMenuDirective,
  ],
  imports: [
    CdkTableModule,
    MatDialogModule,
    CommonModule
  ],
  exports: [
    NgxRightClickMenuComponent,
    NgxRightClickMenuDirective
  ],
  entryComponents: [
    NgxRightClickMenuComponent
  ]
})
export class NgxRightClickMenuModule { }
