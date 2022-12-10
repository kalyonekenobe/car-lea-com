import {FC, useState} from "react";
import {Navbar} from "../application/Navbar";
import {Footer} from "../application/Footer";
import "../../styles/cars/cars.css";
import {Sidebar} from "./Sidebar";

export const Cars: FC = () => {

  return (
    <main className={"cars"}>
      <Navbar changeNavbarThemeCheckpoint={0} navbarTheme={"white"} />
      <section className={"cars-container"}>
        <Sidebar />
        <div className={"content-container"}>
          <header className={"filters"}>

          </header>
          <div className={"content"}>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}