import React from "react";
import {Feedback} from "../../components/home/Feedback";
import {Category} from "../../components/home/Category";
import {CarsPagePropsType} from "../cars/cars.types";

export type FeedbackPropsType = {
  data: FeedbackViewType
}

export type CategoryPropsType = {
  data: CategoryViewType
}

export type FeedbackViewType = {
  imagePath: string,
  author: string,
  authorTitle: string,
  cite: string
}

export type CategoryViewType = {
  imagePath: string,
  categoryName: string,
  url: string,
  state: CarsPagePropsType
}

export type FeedbacksSectionPropsType = {
  children?: React.ReactElement<typeof Feedback> | React.ReactElement<typeof Feedback>[]
}

export type CategoriesSectionPropsType = {
  children?: React.ReactElement<typeof Category> | React.ReactElement<typeof Category>[]
}