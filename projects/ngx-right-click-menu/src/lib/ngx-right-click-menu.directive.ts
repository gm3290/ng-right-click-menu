/* tslint:disable:member-ordering */
import {
  Directive, HostListener, Input,
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgxRightClickMenuComponent } from './ngx-right-click-menu.component';

@Directive({
  selector: '[ngxContextMenu]'
})

export class NgxRightClickMenuDirective {
  @Input() set ngxContextMenu(data: any) {
    this.processorName = data.processorName;
    this.servers = data.servers;
  }

  @HostListener('contextmenu', ['$event'])
  public menuContext = (event: MouseEvent) => this.openMenu(event);

  @HostListener('document:click', ['$event'])
  public onClick = () => this.dialog.closeAll();;

  private processorName: string;
  private servers: any[];

  constructor(
    public dialog: MatDialog,
  ) { }

  private openMenu(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dialog.closeAll();
    this.dialog.open(NgxRightClickMenuComponent, {
      width: '200px',
      // hasBackdrop: false,
      data: {
        processorName: this.processorName,
        servers: this.servers
      },
      // position: {
      //   top: `${event.clientY}px`,
      //   left: `${this.getPosition(event.clientX)}px`,
      // },
      panelClass: 'ngContextMenu-container',
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
