export interface MenuItem {
  label: string;
  action: Function;
  disable?: boolean;
  icon?: string;
}

export interface Menu {
  title?: string;
  items: MenuItem[];
}
