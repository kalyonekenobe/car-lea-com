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