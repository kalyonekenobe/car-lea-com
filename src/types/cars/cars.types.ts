import React from "react";

export type CarsSectionStateType = {
  filtersSidebarIsVisible: boolean,
  activeContentPage: number,
  filters: CarsSidebarStateType,
  content: CarType[],
  activePage: number
}

export type CarsSidebarStateType = {
  availableNow: boolean,
  pricePerDay: {
    min: number,
    max: number,
    value: number | number[]
  },
  manufacturers: CarsSidebarManufacturerType[],
  categories: CarsSidebarCategoryType[],
}

export type CarsSidebarPropsType = {
  filtersState: [CarsSectionStateType, React.Dispatch<CarsSectionStateType>]
}

export type CarsFiltersPropsType = {
  carsContainerState: [CarsSectionStateType, React.Dispatch<CarsSectionStateType>]
}

export type CarsPagePropsType = {
  category: string
}

export type CarsSidebarCategoryType = {
  name: string,
  value?: string,
  checked: boolean
}

export type CarsSidebarManufacturerType = {
  name: string,
  value?: string,
  checked: boolean
}

export type CarType = {
  id: number | string,
  image: string,
  title: string,
  pricePerDay: number,
  category: string,
  manufacturer: string,
  mileage: number,
  seats: number,
  transmission: string
}

export type CarCardPropsType = {
  data: CarType
}