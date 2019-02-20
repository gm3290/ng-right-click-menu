import { Component, EventEmitter, Output, ElementRef } from '@angular/core';
@Component({
  selector: 'ngx-right-click-menu-backdrop',
  styles: [
    `.overlay-backdrop {
      position: fixed;
      top: 0px;
      bottom: 0px;
      right: 0px;
      left: 0px;
      z-index: 1000;
    }`,

  ],
  template: `
    <div class='overlay-backdrop' (contextmenu)='closeMenu($event)' (click)='closeMenu($event)'></div>
  `,
})

export class NgxRightClickMenuBackDropComponent {
  @Output() backDropClick = new EventEmitter();

  constructor(public _element: ElementRef) {
    const el: HTMLElement = this._element.nativeElement;
    el.style.position = 'fixed';
    el.style.top = '0px';
    el.style.bottom = '0px';
    el.style.left = '0px';
    el.style.right = '0px';
    el.style.zIndex = '1000';
  }
  public closeMenu(event) {
    event.preventDefault();
    this.backDropClick.emit();
  }
}
