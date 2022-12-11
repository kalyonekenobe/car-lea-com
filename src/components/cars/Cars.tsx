import {FC, useState} from "react";
import {Navbar} from "../application/Navbar";
import {Footer} from "../application/Footer";
import "../../styles/cars/cars.css";
import {Sidebar} from "./Sidebar";
import {CarsSectionStateType} from "../../types/cars/cars.types";
import {Filters} from "./Filters";
import {Card} from "./Card";
import {Pagination} from "../application/Pagination";

const initialState: CarsSectionStateType = {
  filtersSidebarIsVisible: true,
  activeContentPage: 1
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <Pagination items={items} itemsPerPage={1} numberOfButtons={3} />
        </div>
      </section>
      <Footer />
    </main>
  )
}