import {CarType} from "../cars/cars.types";

export type MobileMenuPropsType = {
  close: () => void
}

export type NavbarStateType = {
  mobileMenuIsVisible: boolean,
  navbarTheme: string,
  windowScrollPercentage: number
}

export type NavbarPropsType = {
  navbarTheme?: string,
  changeNavbarThemeCheckpoint?: number
}

export type SelectorPropsType = {
  options: SelectorOptionType[],
  onChange?: (...params: any) => any
}

export type SelectorStateType = {
  selectedOption?: SelectorOptionType,
  optionListIsVisible: boolean
}

export type SelectorOptionType = {
  name: string,
  value?: any
}

export type PaginationStateType = {
  activePage: number,
  numberOfPages: number,
  visibleButtons: PaginationButtonType[],
}

export type PaginationButtonType = {
  name: string,
  number?: number
}

export type PaginationPropsType = {
  itemsPerPage: number,
  numberOfButtons: number,
  items: any[],
  updatePage: (page: number, items: CarType[]) => any
}