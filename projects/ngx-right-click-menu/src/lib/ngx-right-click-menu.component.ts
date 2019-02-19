import { Component, OnInit, ElementRef, Output, Input, EventEmitter, } from '@angular/core';
import { MenuItem } from './ngx-right-click-menu.model';

@Component({
  selector: 'ngx-right-click-menu',
  styles: [
    `.overlay-backdrop {
      position: fixed;
      top: 0px;
      bottom: 0px;
      right: 0px;
      left: 0px;
      z-index: 1000;
    }
    `,
    `.ngx-context-menu {
      position: relative;
      z-index: 9999;
      display: block;
      height: auto;
      border: 1px #e5e5e5 solid;
      cursor: pointer;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    }`,
    `.ngx-context-menu h4 {
      margin: 8px 16px 4px;
      text-align: center;
    }`,
    `.ngx-context-menu ul {
      list-style: none;
      padding: 0px;
      margin: 4px 0px;
    }`,
    `.ngx-context-menu ul li {
      padding: 4px 8px;
    }`,
    `.ngx-context-menu ul li:hover {
      background: rgba(0, 0, 0, 0.08);
    }`,
    `.ngx-context-menu ul li a {
      width: 100%;
    }`,
  ],
  template: `
  <div class='overlay-backdrop' (contextmenu)='closeMenu($event)' (click)='closeMenu($event)'></div>
  <div class='ngx-context-menu' #ngxContextRef>
    <h4>{{ title }}</h4>
    <ul>
      <li *ngFor="let item of items; let i = index" (click)="itemClick($event,i)">
        <a>
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
`,
})
export class NgxRightClickMenuComponent implements OnInit {
  @Output() backDropClick = new EventEmitter();

  @Input() title: string;

  @Input() items: MenuItem[];

  constructor(private _element: ElementRef) { }

  ngOnInit() { }

  public position(x: number, y: number) {
    const el: HTMLElement = this._element.nativeElement;
    el.style.position = 'fixed';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
  }

  public closeMenu(event) {
    event.preventDefault();
    this.backDropClick.emit();
  }

  public itemClick(event, index: number) {
    if (this.items[index].action && typeof this.items[index].action === 'function') {
      this.items[index].action();
    }
    this.closeMenu(event);
  }
}
