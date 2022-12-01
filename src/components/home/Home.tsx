import {FC} from "react";
import '../../styles/home/home.css';
import {Header} from "./Header";
import {Link} from "react-router-dom";

export const Home: FC = () => {

  return (
    <main className={"home"}>
      <Header />
      <section className={"cars-categories-section"}>
        <h2>Categories</h2>
        <div className={"categories-list"}>
          <div className={"categories-list-item"}>
            <div className={"image-wrapper"}>
              <img src={`${process.env.PUBLIC_URL}/images/hatchback.jpg`} alt={"Hatchbacks"} />
            </div>
            <div className={"content"}>
              <h3>Hatchbacks</h3>
              <Link to={'/hatchbacks'} replace={true} className={"button button-red"}>View</Link>
            </div>
          </div>
          <div className={"categories-list-item"}>
            <div className={"image-wrapper"}>
              <img src={`${process.env.PUBLIC_URL}/images/sedan.jpg`} alt={"Sedans"} />
            </div>
            <div className={"content"}>
              <h3>Sedans</h3>
              <Link to={'/sedans'} replace={true} className={"button button-red"}>View</Link>
            </div>
          </div>
          <div className={"categories-list-item"}>
            <div className={"image-wrapper"}>
              <img src={`${process.env.PUBLIC_URL}/images/wagon.jpg`} alt={"Wagons"} />
            </div>
            <div className={"content"}>
              <h3>Wagons</h3>
              <Link to={'/wagons'} replace={true} className={"button button-red"}>View</Link>
            </div>
          </div>
          <div className={"categories-list-item"}>
            <div className={"image-wrapper"}>
              <img src={`${process.env.PUBLIC_URL}/images/convertible.jpg`} alt={"Convertibles"} />
            </div>
            <div className={"content"}>
              <h3>Convertibles</h3>
              <Link to={'/convertibles'} replace={true} className={"button button-red"}>View</Link>
            </div>
          </div>
          <div className={"categories-list-item"}>
            <div className={"image-wrapper"}>
              <img src={`${process.env.PUBLIC_URL}/images/coupe.jpg`} alt={"Coupes"} />
            </div>
            <div className={"content"}>
              <h3>Coupes</h3>
              <Link to={'/coupes'} replace={true} className={"button button-red"}>View</Link>
            </div>
          </div>
          <div className={"categories-list-item"}>
            <div className={"image-wrapper"}>
              <img src={`${process.env.PUBLIC_URL}/images/suv.jpg`} alt={"SUVs"} />
            </div>
            <div className={"content"}>
              <h3>SUVs</h3>
              <Link to={'/suvs'} replace={true} className={"button button-red"}>View</Link>
            </div>
          </div>
          <div className={"categories-list-item"}>
            <div className={"image-wrapper"}>
              <img src={`${process.env.PUBLIC_URL}/images/pickup.jpg`} alt={"Pick Ups"} />
            </div>
            <div className={"content"}>
              <h3>Pick Ups</h3>
              <Link to={'/pickups'} replace={true} className={"button button-red"}>View</Link>
            </div>
          </div>
          <div className={"categories-list-item"}>
            <div className={"image-wrapper"}>
              <img src={`${process.env.PUBLIC_URL}/images/van.jpg`} alt={"VANs"} />
            </div>
            <div className={"content"}>
              <h3>VANs</h3>
              <Link to={'/vans'} replace={true} className={"button button-red"}>View</Link>
            </div>
          </div>
          <div className={"categories-list-item"}>
            <div className={"image-wrapper"}>
              <img src={`${process.env.PUBLIC_URL}/images/jeep.jpg`} alt={"Jeeps"} />
            </div>
            <div className={"content"}>
              <h3>Jeeps</h3>
              <Link to={'/jeeps'} replace={true} className={"button button-red"}>View</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}