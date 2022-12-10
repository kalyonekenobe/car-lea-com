import {FC, useState} from "react";
import {Navbar} from "../application/Navbar";
import {Footer} from "../application/Footer";
import "../../styles/cars/cars.css";
import {Sidebar} from "./Sidebar";
import {CarsSectionStateType} from "../../types/cars/cars.types";
import {Filters} from "./Filters";

const initialState: CarsSectionStateType = {
  filtersSidebarIsVisible: true
}

export const Cars: FC = () => {
  const [state, setState] = useState(initialState);

  return (
    <main className={"cars"}>
      <Navbar changeNavbarThemeCheckpoint={0} navbarTheme={"white"} />
      <section className={`cars-container ${!state.filtersSidebarIsVisible ? `full-screen` : ``}`}>
        {
          state.filtersSidebarIsVisible &&
            <Sidebar hideSidebar={() => setState({...state, filtersSidebarIsVisible: false})} />
        }
        <div className={`content-container`}>
          <Filters carsContainerState={[state, setState]} />
          <div className={"content"}>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}