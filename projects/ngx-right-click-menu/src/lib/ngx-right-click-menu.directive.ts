/* tslint:disable:member-ordering */
import {
  Directive, HostListener, Input, ComponentFactoryResolver, ViewContainerRef
} from '@angular/core';
import { NgxRightClickMenuComponent } from './ngx-right-click-menu.component';
import { NgxRightClickMenuBackDropComponent } from './ngx-right-click-menu-backdrop.component';
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
    private _viewContainerRef: ViewContainerRef,
    private _backdropRef: ViewContainerRef,
  ) { }

  private openMenu(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    this._viewContainerRef.clear();

    const backdropFactory = this._componentResolver.resolveComponentFactory(NgxRightClickMenuBackDropComponent);
    const backdropRef = this._viewContainerRef.createComponent(backdropFactory);

    const componentFactory = this._componentResolver.resolveComponentFactory(NgxRightClickMenuComponent);
    const componentRef = this._viewContainerRef.createComponent(componentFactory);

    this._contextMenu = componentRef.instance;
    this._contextMenu.top = event.clientY;
    this._contextMenu.left = event.clientX;
    this._contextMenu.position();

    this._contextMenu.title = this.title;
    this._contextMenu.items = this.items;

    backdropRef.instance['backDropClick'].subscribe(() => {
      this._viewContainerRef.clear();
    });
    this._contextMenu['itemClicked'].subscribe(() => {
      this._viewContainerRef.clear();
    });
  }

}
