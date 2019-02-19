# ngx-right-click-menu

ngx-right-click-menu is right click context menu for Angular 2+.

__DEMO__ https://example.com/

### Dependencies

`"@angular/common": "^7.0.0"`

`@angular/core": "^7.0.0`

### Setup
  `npm i -s ngx-right-click-menu`
  
import `NgxRightClickMenuModule`

````typescript
import { NgxRightClickMenuModule } from 'ngx-right-click-menu'

@NgModule({
  //...
  imports: [
  ...
    NgxRightClickMenuModule,
  ...
  ]
  //...
})
````

## Usage

````html
  <div [ngxContextMenu]="menu" class="item">
    Right click here!
  </div>
````

````typescript
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
    ],
  }
  public menuAction() {
    console.log('menu clicked!');
  }
}
````
