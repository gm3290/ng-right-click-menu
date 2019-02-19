export interface MenuItem {
  label: string;
  action: Function;
}

export interface Menu {
  title?: string;
  items: MenuItem[];
}
