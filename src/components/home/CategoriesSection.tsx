import {FC} from "react";
import {CategoriesSectionPropsType} from "../../types/home/home.types";

export const CategoriesSection: FC<CategoriesSectionPropsType> = ({children}) => {
  return (
    <section className={"cars-categories-section"}>
      <h2>Categories</h2>
      <div className={"categories-list"}>
        {children}
      </div>
    </section>
  )
}