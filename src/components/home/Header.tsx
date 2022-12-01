import {FC} from "react";
import {Navbar} from "../application/Navbar";

export const Header: FC = () => {
  return (
    <header className={"home-header"}>
      <div className={'video-wrapper'}>
        <video autoPlay={true} muted={true} loop={true}>
          <source src={`${process.env.PUBLIC_URL}/images/homepage-header-video.webm`} type={"video/webm"} />
          <source src={`${process.env.PUBLIC_URL}/images/homepage-header-video.mp4`} type={"video/mp4"} />
        </video>
      </div>
      <Navbar />
      <div className={"header-content"}>
        <h1>CarLeaCom</h1>
        <h2>Car leasing company</h2>
        <p>
          The best car lessor in Ukraine. It has more than 10000 cars of different brands of manufacturers from all over the world.
        </p>
        <span className={"button button-red"}>Search for a car</span>
      </div>
    </header>
  )
}