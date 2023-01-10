import {FC, useEffect, useState} from "react";
import '../../styles/home/home.css';
import {Header} from "./Header";
import {Footer} from "../application/Footer";
import {GallerySection} from "./GallerySection";
import {Feedback} from "./Feedback";
import {FeedbacksSection} from "./FeedbacksSection";
import {AboutSection} from "./AboutSection";
import {Category} from "./Category";
import {CategoriesSection} from "./CategoriesSection";
import axios, {AxiosResponse} from "axios";
import {FeedbackType, FeedbackViewType, HomePageStateType} from "../../types/home/home.types";

const initialState: HomePageStateType = {
  feedbacks: []
}

export const Home: FC = () => {

  const [state, setState] = useState(initialState);

  useEffect(() => {
    axios.get<any, AxiosResponse<FeedbackType[]>>('http://localhost:3001/feedbacks').then(response => {
      const feedbacks = response.data;
      setState({
        ...state,
        feedbacks: feedbacks.map(feedback => feedback as FeedbackViewType)
      })
    })
  }, [])

  return (
    <main className={"home"}>
      <Header />
      <CategoriesSection>
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/hatchback.jpg`,
          categoryName: "Hatchbacks",
          url: '/cars',
          state: { category: "hatchbacks" }
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/sedan.jpg`,
          categoryName: "Sedans",
          url: '/cars',
          state: { category: "sedans" }
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/wagon.jpg`,
          categoryName: "Wagons",
          url: '/cars',
          state: { category: "wagons" }
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/convertible.jpg`,
          categoryName: "Convertibles",
          url: '/cars',
          state: { category: "convertibles" }
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/coupe.jpg`,
          categoryName: "Coupes",
          url: '/cars',
          state: { category: "coupes" }
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/suv.jpg`,
          categoryName: "SUVs",
          url: '/cars',
          state: { category: "suvs" }
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/pickup.jpg`,
          categoryName: "Pick Ups",
          url: '/cars',
          state: { category: "pickups" }
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/van.jpg`,
          categoryName: "VANs",
          url: '/cars',
          state: { category: "vans" }
        }} />
        <Category data={{
          imagePath: `${process.env.PUBLIC_URL}/images/jeep.jpg`,
          categoryName: "Jeeps",
          url: '/cars',
          state: { category: "jeeps" }
        }} />
      </CategoriesSection>
      <AboutSection />
      <FeedbacksSection feedbacksState={[state, setState]}>
        {
          state.feedbacks.map(feedback => (
            <Feedback key={feedback.id} data={{
              id: feedback.id,
              imagePath: `${process.env.PUBLIC_URL}/${feedback.imagePath}`,
              author: feedback.author,
              authorTitle: feedback.authorTitle,
              cite: feedback.cite
            }} />
          ))
        }
      </FeedbacksSection>
      <GallerySection />
      <Footer />
    </main>
  )
}