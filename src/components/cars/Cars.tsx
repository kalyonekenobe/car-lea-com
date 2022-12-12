import {FC, useEffect, useState} from "react";
import {Navbar} from "../application/Navbar";
import {Footer} from "../application/Footer";
import "../../styles/cars/cars.css";
import {Sidebar} from "./Sidebar";
import {CarsSectionStateType, CarType} from "../../types/cars/cars.types";
import {Filters} from "./Filters";
import {Card} from "./Card";
import {Pagination} from "../application/Pagination";
import {useLocation} from "react-router";

const initialState: CarsSectionStateType = {
  filtersSidebarIsVisible: window.innerWidth >= 1024,
  activeContentPage: 1,
  filters: {
    availableNow: true,
    pricePerDay: {
      min: 0,
      max: 1000,
      value: [100, 900]
    },
    manufacturers: [
      {
        name: "Audi",
        value: "Audi",
        checked: false
      },
      {
        name: "Mercedes",
        value: "Mercedes",
        checked: false
      },
      {
        name: "BMW",
        value: "BMW",
        checked: false
      },
      {
        name: "Mitsubishi",
        value: "Mitsubishi",
        checked: false
      },
      {
        name: "Nissan",
        value: "Nissan",
        checked: false
      },
      {
        name: "Toyota",
        value: "Toyota",
        checked: false
      },
      {
        name: "Porshe",
        value: "Porshe",
        checked: false
      },
      {
        name: "Daewoo",
        value: "Daewoo",
        checked: false
      },
    ],
    categories: [
      {
        name: "Hatchbacks",
        value: "hatchbacks",
        checked: false
      },
      {
        name: "Sedans",
        value: "sedans",
        checked: false
      },
      {
        name: "Wagons",
        value: "wagons",
        checked: false
      },
      {
        name: "Convertibles",
        value: "convertibles",
        checked: false
      },
      {
        name: "Coupes",
        value: "coupes",
        checked: false
      },
      {
        name: "SUVs",
        value: "suvs",
        checked: false
      },
      {
        name: "Pick Ups",
        value: "pickups",
        checked: false
      },
      {
        name: "VANs",
        value: "vans",
        checked: false
      },
      {
        name: "Jeeps",
        value: "jeeps",
        checked: false
      },
    ]
  },
  content: [],
  activePage: 1
}

const content: CarType[] = [
  {
    id: 1,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 1",
    transmission: "Automatic"
  },
  {
    id: 2,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 2",
    transmission: "Automatic"
  },
  {
    id: 3,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 3",
    transmission: "Automatic"
  },
  {
    id: 4,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 4",
    transmission: "Automatic"
  },
  {
    id: 5,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 5",
    transmission: "Automatic"
  },
  {
    id: 6,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 6",
    transmission: "Automatic"
  },
  {
    id: 7,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 7",
    transmission: "Automatic"
  },
  {
    id: 8,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 8",
    transmission: "Automatic"
  },
  {
    id: 9,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 9",
    transmission: "Automatic"
  },
  {
    id: 10,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 10",
    transmission: "Automatic"
  },
  {
    id: 11,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 11",
    transmission: "Automatic"
  },
  {
    id: 12,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 12",
    transmission: "Automatic"
  },
  {
    id: 13,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 13",
    transmission: "Automatic"
  },
  {
    id: 14,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 14",
    transmission: "Automatic"
  },
  {
    id: 15,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 15",
    transmission: "Automatic"
  },
  {
    id: 16,
    category: "hatchbacks",
    image: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
    manufacturer: "Audi",
    pricePerDay: 200,
    mileage: 10000,
    seats: 2,
    title: "Audi R8 16",
    transmission: "Automatic"
  }
]

export const Cars: FC = () => {

  const location = useLocation();
  const contentPerPage = 10;
  const numberOfButtons = 3;
  const initialCarsCategory = location.state?.category;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (initialCarsCategory)
      setState({
        ...state,
        filters: {
          ...state.filters,
          categories: state.filters.categories.map(category => {
            return category.value === initialCarsCategory ? {...category, checked: true} : {...category, checked: false}
          })
        },
        content: content.slice(0, Math.min(content.length, contentPerPage))
      })
  }, [initialCarsCategory])

  return (
    <main className={"cars"}>
      <Navbar changeNavbarThemeCheckpoint={0} navbarTheme={"white"} />
      <section className={`cars-container ${!state.filtersSidebarIsVisible ? `full-screen` : ``}`}>
        {
          state.filtersSidebarIsVisible &&
            <Sidebar filtersState={[state, setState]} />
        }
        <div className={`content-container`}>
          <Filters carsContainerState={[state, setState]} />
          <div className={'content-wrapper'}>
            <div className={"content"}>
              {
                state.content.map((item, index) => (
                  <Card key={index} data={item} />
                ))
              }
            </div>
          </div>
          <Pagination items={content}
                      itemsPerPage={contentPerPage}
                      numberOfButtons={numberOfButtons}
                      updatePage={(page: number, items: CarType[]) => {
                        setState({...state, activePage: page, content: items})
                      }}
          />
        </div>
      </section>
      <Footer />
    </main>
  )
}