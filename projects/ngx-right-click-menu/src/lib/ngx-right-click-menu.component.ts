import { Component, OnInit, AfterViewInit, ElementRef, Output, Input, EventEmitter, } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
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
      cursor: pointer;
      background: #fff;
      padding: 16px 0px 0px;
      user-select: none;
    }`,
    `.mat-card-title {
      margin-bottom: 0px !important;
    }`,
    `.mat-list-item {
      height: 36px !important;
    }`,
    `.mat-list-item.disable {
      cursor: not-allowed;
      background: rgba(0, 0, 0, 0.06);
    }`,
    `.mat-list-item h5 {
      padding-left: 4px;
      margin: 8px 0px;
      font-weight: 500;
  }
    }`,
    `.mat-list-icon {
      color: rgba(0, 0, 0, 0.54);
    }`,
    `.menu-list {
      padding: 0px;
    }`
  ],
  template: `
  <mat-card class="ngx-context-menu" #ngxContextRef [@fadeInOut]>
    <mat-card-header>
      <mat-card-title>{{ title }}</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <mat-nav-list role="list" class='menu-list'>
        <mat-list-item role="listitem" *ngFor="let item of items; let i = index"
                       (click)="itemClick($event,i)"
                       [disableRipple]='item.disable'
                       [class.disable]='item.disable'>
          <mat-icon *ngIf='item.icon' mat-list-icon>{{ item.icon }}</mat-icon>
          <h5>{{ item.label }}</h5>
        </mat-list-item>
      </mat-nav-list>
    </mat-card-content>
  </mat-card>
`,
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ]),
  ],
})
export class NgxRightClickMenuComponent implements OnInit, AfterViewInit {
  @Output() itemClicked = new EventEmitter();

  @Input() title: string;

  @Input() items: MenuItem[];

  public top = 0;
  public left = 0;

  constructor(public _element: ElementRef) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.position(this._element.nativeElement.clientWidth, this._element.nativeElement.clientHeight)
  }

  public position(clientW: number = 130, clientH: number = 340) {
    const el: HTMLElement = this._element.nativeElement;
    el.style.position = 'fixed';

    let diff = window.innerWidth - this.left;
    if (diff < clientW) {
      el.style.right = diff + 'px';
    } else {
      el.style.left = this.left + 'px';
    }

    diff = window.innerHeight - this.top;
    if (diff < clientH) {
      el.style.bottom = diff + 'px';
    } else {
      el.style.top = this.top + 'px';
    }
    el.style.zIndex = '9999';
  }

  public closeMenu(event) {
    event.preventDefault();
    this.itemClicked.emit();
  }

  public itemClick(event, index: number) {
    if (this.items[index].disable) {
      return;
    }
    if (this.items[index].action && typeof this.items[index].action === 'function') {
      this.items[index].action();
    }
    setTimeout(() => {
      this.closeMenu(event);
    }, 200);
  }
}
