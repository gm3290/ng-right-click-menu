# ngx-right-click-menu

ngx-right-click-menu is right click context menu for Angular 2+.

__DEMO__ https://example.com/

### Dependencies

`"@angular/common": "^7.0.0"`

`@angular/core": "^7.0.0`

`"@angular/material": "^7.3.0"`

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
        disable: true,
        icon: 'home',
        action: this.menuAction,
      },
    ],
  }
  public menuAction() {
    console.log('menu clicked!');
  }
}
````

### To use Ripple effect, add below line to style.css.

``` css
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
```

### In order to use material icons, add below line to index.html

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

*Note*
If you have good suggetions or issues, please leave a comments here:

__ISSUES__  https://github.com/chpinan1128/ng-right-click-menu/issues
