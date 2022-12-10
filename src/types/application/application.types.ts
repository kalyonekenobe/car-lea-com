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
  options: SelectorOptionType[]
}

export type SelectorStateType = {
  selectedOption?: SelectorOptionType,
  optionListIsVisible: boolean
}

export type SelectorOptionType = {
  name: string,
  value?: any
}