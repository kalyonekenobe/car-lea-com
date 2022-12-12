import {FC, useEffect, useState} from "react";
import {Navbar} from "../application/Navbar";
import {Footer} from "../application/Footer";
import "../../styles/cars/cars.css";
import {Sidebar} from "./Sidebar";
import {CarCategoryType, CarManufacturerType, CarsSectionStateType, CarType} from "../../types/cars/cars.types";
import {Filters} from "./Filters";
import {Card} from "./Card";
import {Pagination} from "../application/Pagination";
import {useLocation} from "react-router";
import axios, {AxiosResponse} from "axios";

const initialState: CarsSectionStateType = {
  filtersSidebarIsVisible: window.innerWidth >= 1024,
  pageIsLoading: true,
  activeContentPage: 1,
  filters: {
    availableNow: false,
    pricePerDay: {
      min: 0,
      max: 0,
      value: [0, 0]
    },
    manufacturers: [],
    categories: [],
    orderBy: "MostRelevant",
    searchQuery: "",
  },
  content: [],
  filteredContent: [],
  contentOnPage: [],
  activePage: 1
}

export const Cars: FC = () => {

  const location = useLocation();
  const contentPerPage = 10;
  const numberOfButtons = 3;
  const initialCarsCategory = location.state?.category;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({...state, pageIsLoading: true});
    let updatedState: CarsSectionStateType = state;
    axios.get<any, AxiosResponse<CarManufacturerType[]>>("http://localhost:3001/manufacturers").then(response => {
      const manufacturers = response.data;
      updatedState = {
        ...updatedState,
        filters: {
          ...updatedState.filters,
          manufacturers: manufacturers.map(manufacturer => ({
            name: manufacturer.name,
            value: manufacturer.value,
            checked: false
          }))
        }
      }
      axios.get<any, AxiosResponse<CarCategoryType[]>>('http://localhost:3001/categories').then(response => {
        const categories = response.data;
        updatedState = {
          ...updatedState,
          filters: {
            ...updatedState.filters,
            categories: categories.map(category => ({
              name: category.name,
              value: category.value,
              checked: initialCarsCategory === category.value
            }))
          }
        }
        axios.get<any, AxiosResponse<CarType[]>>('http://localhost:3001/cars').then(response => {
          let cars = structuredClone(response.data);
          cars = cars.sort((a: CarType, b: CarType) => a.pricePerDay - b.pricePerDay);
          updatedState = {
            ...updatedState,
            content: response.data,
            filters: {
              ...updatedState.filters,
              pricePerDay: {
                min: cars[0].pricePerDay,
                max: cars[cars.length - 1].pricePerDay,
                value: [cars[0].pricePerDay, cars[cars.length - 1].pricePerDay]
              }
            },
            filteredContent: structuredClone(cars).sort((a: CarType, b: CarType) => {
              if (typeof a.id === "number" && typeof b.id === "number")
                return b.id - a.id
              if (typeof a.id === "string" && typeof b.id === "string")
                return b.id.toString().localeCompare(a.id.toString())
              return -1;
            }),
            contentOnPage: cars.slice(0, Math.min(cars.length, contentPerPage)),
          }
          if (updatedState.filters.categories) {
            if (updatedState.filters.categories) {
              const checkedCategories = updatedState.filters.categories.filter(category => category.checked);
              if (checkedCategories.length > 0) {
                updatedState.filteredContent = structuredClone(updatedState.filteredContent).filter((contentItem: CarType) => {
                  return checkedCategories.find(category => category.value === contentItem.category);
                })
              }
            }
          }
          setState({...updatedState, pageIsLoading: false});
        });
      });
    })
  }, [initialCarsCategory])

  useEffect(() => {
    let filteredContent: CarType[] = state.content;
    if (state.filters === undefined)
      return;
    if (state.filters.orderBy) {
      switch (state.filters.orderBy) {
        case "MostRelevant":
          filteredContent = structuredClone(filteredContent).sort((a: CarType, b: CarType) => {
            if (typeof a.id === "number" && typeof b.id === "number")
              return b.id - a.id
            if (typeof a.id === "string" && typeof b.id === "string")
              return b.id.toString().localeCompare(a.id.toString())
            return -1;
          })
          break;
        case "DateAdded":
          filteredContent = structuredClone(filteredContent).sort((a: CarType, b: CarType) => {
            return new Date(a.addedAt).getTime() - new Date(b.addedAt).getTime();
          })
          break;
        case "PriceAsc":
          filteredContent = structuredClone(filteredContent).sort((a: CarType, b: CarType) => {
            return a.pricePerDay - b.pricePerDay;
          })
          break;
        case "PriceDesc":
          filteredContent = structuredClone(filteredContent).sort((a: CarType, b: CarType) => {
            return b.pricePerDay - a.pricePerDay;
          })
          break;
        case "AvailableFirst":
          filteredContent = structuredClone(filteredContent).sort((a: CarType, b: CarType) => {
            const aIsAvailable = !a.reservations.find(reservation => {
              return new Date(reservation.from).getTime() <= new Date().getTime() &&
                new Date(reservation.to).getTime() >= new Date().getTime()
            })
            const bIsAvailable = !b.reservations.find(reservation => {
              return new Date(reservation.from).getTime() <= new Date().getTime() &&
                new Date(reservation.to).getTime() >= new Date().getTime()
            })
            if (aIsAvailable)
              return -1;
            if (bIsAvailable)
              return 1;
            return new Date(a.addedAt).getTime() - new Date(b.addedAt).getTime();
          })
          break;
        default:
          break;
      }
    }
    if (state.filters.availableNow) {
      filteredContent = structuredClone(filteredContent).filter((contentItem: CarType) => {
        return !contentItem.reservations.find(reservation => {
          return new Date(reservation.from).getTime() <= new Date().getTime() &&
            new Date(reservation.to).getTime() >= new Date().getTime()
        })
      })
    }
    if (state.filters.manufacturers) {
      const checkedManufacturers = state.filters.manufacturers.filter(manufacturer => manufacturer.checked);
      if (checkedManufacturers.length > 0) {
        filteredContent = structuredClone(filteredContent).filter((contentItem: CarType) => {
          return checkedManufacturers.find(manufacturer => manufacturer.name === contentItem.manufacturer);
        })
      }
    }
    if (state.filters.categories) {
      const checkedCategories = state.filters.categories.filter(category => category.checked);
      if (checkedCategories.length > 0) {
        filteredContent = structuredClone(filteredContent).filter((contentItem: CarType) => {
          return checkedCategories.find(category => category.value === contentItem.category);
        })
      }
    }
    if (state.filters.pricePerDay) {
      filteredContent = structuredClone(filteredContent).filter((contentItem: CarType) => {
        return state.filters.pricePerDay.value[0] <= contentItem.pricePerDay &&
          contentItem.pricePerDay <= state.filters.pricePerDay.value[1];
      })
    }
    if (state.filters.searchQuery.trim() !== '') {
      filteredContent = structuredClone(filteredContent).filter((contentItem: CarType) => {
        return contentItem.title.includes(state.filters.searchQuery)
      })
    }
    setState({
      ...state,
      pageIsLoading: false,
      filteredContent: filteredContent
    });
  }, [state.filters])

  return !state.pageIsLoading ? (
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
                state.filteredContent.length > 0 &&
                  state.contentOnPage.map((item, index) => (
                    <Card key={index} data={item} />
                  ))
              }
            </div>
          </div>
          {
            <Pagination items={state.filteredContent}
                        itemsPerPage={contentPerPage}
                        numberOfButtons={numberOfButtons}
                        updatePage={(page: number, items: CarType[]) => {
                          setState({...state, activePage: page, contentOnPage: items})
                        }}
            />
          }
        </div>
      </section>
      <Footer />
    </main>
  ) : (<></>)
}