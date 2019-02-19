import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public menu = {
    title: 'Simple Menu',
    items: [
      {
        label: 'Menu 1',
        action: this.menuAction,
      },
      {
        label: 'Menu 2',
        action: this.menuAction,
      },
      {
        label: 'Menu 3',
        action: this.menuAction,
      },
      {
        label: 'Menu 4',
        action: this.menuAction,
      },
      {
        label: 'Menu 5',
        action: this.menuAction,
      },
    ],
  }
  public menuAction() {
    console.log('menu clicked!');
  }
}
