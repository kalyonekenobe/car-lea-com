import React from "react";

export type CarsSectionStateType = {
  filtersSidebarIsVisible: boolean,
  activeContentPage: number
}

export type CarsSidebarStateType = {
  availableNow: boolean,
  pricePerDay: {
    min: number,
    max: number,
    value: number | number[]
  }
}

export type CarsSidebarPropsType = {
  hideSidebar: () => void
}

export type CarsFiltersPropsType = {
  carsContainerState: [CarsSectionStateType, React.Dispatch<any>]
}
