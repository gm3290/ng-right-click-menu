/* tslint:disable:member-ordering */
import {
  Directive, HostListener, Input, ComponentFactoryResolver, ViewContainerRef
} from '@angular/core';
import { NgxRightClickMenuComponent } from './ngx-right-click-menu.component';
import { Menu, MenuItem } from './ngx-right-click-menu.model';

@Directive({
  selector: '[ngxContextMenu]'
})

export class NgxRightClickMenuDirective {
  @Input() set ngxContextMenu(data: Menu) {
    this.title = data.title;
    this.items = data.items;
  }

  @HostListener('contextmenu', ['$event'])
  public menuContext = (event: MouseEvent) => this.openMenu(event);

  private title: string;
  private items: MenuItem[] = [];
  public _contextMenu: NgxRightClickMenuComponent;

  constructor(
    private _componentResolver: ComponentFactoryResolver,
    private _viewContainerRef: ViewContainerRef
  ) { }

  private openMenu(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this._viewContainerRef.clear();
    const componentFactory = this._componentResolver.resolveComponentFactory(NgxRightClickMenuComponent);
    const componentRef = this._viewContainerRef.createComponent(componentFactory);

    this._contextMenu = componentRef.instance;
    this._contextMenu.position(event.clientX, event.clientY);

    this._contextMenu.title = this.title;
    this._contextMenu.items = this.items;

    componentRef.instance['backDropClick'].subscribe(() => {
      this._viewContainerRef.clear();
    });
  }

  private getPosition(x: number) {
    const px = x + 240;
    const diff = px - window.innerWidth;
    if (diff > 0) {
      return x - diff - 10;
    }
    return x;
  }
}
