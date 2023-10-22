export interface Menu {
  name: string
  desc?: string
  path: string
}

export interface MenuGroup {
  name: string
  desc?: string
  menus: Array<Menu>
}