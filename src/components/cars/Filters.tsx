import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSliders} from "@fortawesome/free-solid-svg-icons";
import {Selector} from "../application/Selector";
import {SelectorOptionType} from "../../types/application/application.types";
import {CarsFiltersPropsType} from "../../types/cars/cars.types";

const sortingOptions: SelectorOptionType[] = [
  {value: "MostRelevant", name: "Most relevant"},
  {value: "DateAdded", name: "Date added"},
  {value: "PriceDesc", name: "Price descending"},
  {value: "PriceAsc", name: "Price ascending"},
  {value: "AvailableFirst", name: "Available first"}
]

export const Filters: FC<CarsFiltersPropsType> = props => {
  const [state, setState] = props.carsContainerState;

  return (
    <header className={"filters"}>
      <div className={"filters-item show-filters-container"}>
        <FontAwesomeIcon icon={faSliders}
                         onClick={() => {
                           setState({
                             ...state,
                             filtersSidebarIsVisible: !state.filtersSidebarIsVisible
                           })
                         }} />
      </div>
      <div className={"filters-item sorting-container"}>
        <Selector options={sortingOptions} />
      </div>
      <div className={"filters-item search-container"}>
        <input type={"text"} placeholder={"Search..."}/>
      </div>
    </header>
  )
}