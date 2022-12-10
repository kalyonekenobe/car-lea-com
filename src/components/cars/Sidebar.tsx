import {FC, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {Checkbox, FormControlLabel, Slider, Switch} from "@mui/material";

export type CarsSidebarStateType = {
  availableNow: boolean,
  pricePerDay: {
    min: number,
    max: number,
    value: number | number[]
  }
}

const initialState: CarsSidebarStateType = {
  availableNow: true,
  pricePerDay: {
    min: 0,
    max: 1000,
    value: [100, 415.15]
  }
}

export const Sidebar: FC = () => {
  const [state, setState] = useState(initialState);

  return (
    <aside className={"sidebar"}>
      <header className={"sidebar-section sidebar-header"}>
        <h3>Filters</h3>
        <span className={"close-sidebar-button"}>
              <FontAwesomeIcon icon={faXmark} />
              <p>Close</p>
            </span>
      </header>
      <div className={"sidebar-section availability"}>
        <h4>Available now </h4>
        <Switch size={"medium"} defaultChecked />
      </div>
      <div className={"sidebar-section price-per-day"}>
        <h4>Price per day</h4>
        <Slider min={state.pricePerDay.min} max={state.pricePerDay.max} value={state.pricePerDay.value}
                marks={[
                  {value: state.pricePerDay.min, label: `${state.pricePerDay.min}$`},
                  {value: state.pricePerDay.max, label: `${state.pricePerDay.max}$`}
                ]}
                onChange={(event: Event, value: number | number[]) => {
                  setState({...state, pricePerDay: {...state.pricePerDay, value: value}})
                }}
                color={"primary"}
                getAriaValueText={(value: number) => `${value}C`}
        />
      </div>
      <div className={"sidebar-section"}>
        <h4>Manufacturers</h4>
        <ul>
          <li>
            <FormControlLabel label={"Audi"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Mercedes"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"BMW"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Lamborgini"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Toyota"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Mazda"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Nissan"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Chevrolet"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Chevrolet"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Chevrolet"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Chevrolet"} control={<Checkbox size={"small"} />} />
          </li>
        </ul>
      </div>
      <div className={"sidebar-section"}>
        <h4>Car types </h4>
        <ul>
          <li>
            <FormControlLabel label={"Hatchbacks"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Sedans"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Wagons"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Convertibles"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Coupes"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"SUVs"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Pick ups"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"VANs"} control={<Checkbox size={"small"} />} />
          </li>
          <li>
            <FormControlLabel label={"Jeeps"} control={<Checkbox size={"small"} />} />
          </li>
        </ul>
      </div>
    </aside>
  )
}