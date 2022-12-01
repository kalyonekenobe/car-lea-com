import {FC} from "react";
import '../../styles/home/home.css';
import {Header} from "./Header";

export const Home: FC = () => {

  return (
    <main className={"home"}>
      <Header />
    </main>
  )
}