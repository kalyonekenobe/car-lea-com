import {FC} from "react";
import '../../styles/home/home.css';
import {Header} from "./Header";
import {Footer} from "../application/Footer";
import {GallerySection} from "./GallerySection";
import {Feedback} from "./Feedback";
import {FeedbacksSection} from "./FeedbacksSection";
import {AboutSection} from "./AboutSection";
import {Category} from "./Category";
import {CategoriesSection} from "./CategoriesSection";

export const Home: FC = () => {

  return (
    <main className={"home"}>
      <Header />
      <CategoriesSection>
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/hatchback.jpg`,
          categoryName: "Hatchbacks",
          url: '/cars/hatchbacks'
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/sedan.jpg`,
          categoryName: "Sedans",
          url: '/cars/sedans'
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/wagon.jpg`,
          categoryName: "Wagons",
          url: '/cars/wagons'
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/convertible.jpg`,
          categoryName: "Convertibles",
          url: '/cars/convertibles'
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
          categoryName: "Coupes",
          url: '/cars/coupes'
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/suv.jpg`,
          categoryName: "SUVs",
          url: '/cars/suvs'
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/pickup.jpg`,
          categoryName: "Pick Ups",
          url: '/cars/pickups'
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/van.jpg`,
          categoryName: "VANs",
          url: '/cars/vans'
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/jeep.jpg`,
          categoryName: "Jeeps",
          url: '/cars/jeeps'
        }} />
      </CategoriesSection>
      <AboutSection />
      <FeedbacksSection>
        <Feedback data={{
          imagePath: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
          author: "Oleksandr Igumnov",
          authorTitle: "Junior C++ Developer",
          cite: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }} />
        <Feedback data={{
          imagePath: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
          author: "Oleksandr Igumnov",
          authorTitle: "Junior C++ Developer",
          cite: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }} />
        <Feedback data={{
          imagePath: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
          author: "Oleksandr Igumnov",
          authorTitle: "Junior C++ Developer",
          cite: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }} />
        <Feedback data={{
          imagePath: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
          author: "Oleksandr Igumnov",
          authorTitle: "Junior C++ Developer",
          cite: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }} />
      </FeedbacksSection>
      <GallerySection />
      <Footer />
    </main>
  )
}