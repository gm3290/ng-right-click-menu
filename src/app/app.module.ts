import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxRightClickMenuModule } from 'ngx-right-click-menu';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRightClickMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
