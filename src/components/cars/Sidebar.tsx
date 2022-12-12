import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {Checkbox, FormControlLabel, Slider, Switch} from "@mui/material";
import {CarsSectionStateType, CarsSidebarPropsType, CarType} from "../../types/cars/cars.types";

export const Sidebar: FC<CarsSidebarPropsType> = props => {
  const {filtersState} = props;
  const [state, setState] = filtersState;

  return (
    <aside className={"sidebar"}>
      <header className={"sidebar-section sidebar-header"}>
        <h3>Filters</h3>
        <span className={"close-sidebar-button"}
              onClick={() => setState({...state, filtersSidebarIsVisible: false})}>
          <FontAwesomeIcon icon={faXmark} />
          <p>Close</p>
        </span>
      </header>
      <div className={"sidebar-section availability"}>
        <h4>Available now </h4>
        <Switch
          size={"medium"}
          checked={state.filters.availableNow}
          onChange={() => {
            setState({
              ...state,
              filters: {
                ...state.filters,
                availableNow: !state.filters.availableNow
              }
            })
          }}
        />
      </div>
      <div className={"sidebar-section price-per-day"}>
        <h4>Price per day</h4>
        <Slider min={state.filters.pricePerDay.min}
                max={state.filters.pricePerDay.max} value={state.filters.pricePerDay.value}
                marks={[
                  {value: state.filters.pricePerDay.min, label: `${state.filters.pricePerDay.min}$`},
                  {value: state.filters.pricePerDay.max, label: `${state.filters.pricePerDay.max}$`}
                ]}
                valueLabelDisplay={"auto"}
                step={50}
                onChange={(event: Event, value: number | number[]) => {
                  setState({
                    ...state,
                    filters: {
                      ...state.filters,
                      pricePerDay: {
                        ...state.filters.pricePerDay,
                        value: value as number[]
                      }
                    }
                  })
                }}
                color={"primary"}
        />
      </div>
      <div className={"sidebar-section"}>
        <h4>Manufacturers</h4>
        <ul>
          {
            state.filters.manufacturers.map((manufacturer, index) => (
              <li key={index}>
                <FormControlLabel
                  label={manufacturer.name}
                  checked={manufacturer.checked}
                  control={
                    <Checkbox
                      value={manufacturer.value}
                      size={"small"}
                      onChange={() => {
                        setState({
                          ...state,
                          filters: {
                            ...state.filters,
                            manufacturers: state.filters.manufacturers.map(item => {
                              return item.name === manufacturer.name ? {...item, checked: !item.checked} : item
                            })
                          }
                        })
                      }}
                    />
                  }
                />
              </li>
            ))
          }
        </ul>
      </div>
      <div className={"sidebar-section"}>
        <h4>Categories</h4>
        <ul>
          {
            state.filters.categories.map((category, index) => (
              <li key={index}>
                <FormControlLabel
                  label={category.name}
                  control={
                    <Checkbox
                      checked={category.checked}
                      value={category.value}
                      size={"small"}
                      onChange={() => {
                        setState({
                          ...state,
                          filters: {
                            ...state.filters,
                            categories: state.filters.categories.map(item => {
                              return item.value === category.value ? {...item, checked: !item.checked} : item
                            })
                          }
                        })
                      }}
                    />
                  }
                />
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  )
}