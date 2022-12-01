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
      <section className={"about-section"}>
        <h2>About us</h2>
        <div className={"content"}>
          <img src={`${process.env.PUBLIC_URL}/images/about.jpg`} alt={"About CarLeaCom"} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. In ante metus dictum at tempor. Neque egestas congue quisque egestas diam. Aenean vel elit scelerisque mauris pellentesque pulvinar. Lacus viverra vitae congue eu consequat. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Diam sit amet nisl suscipit. Morbi tincidunt ornare massa eget egestas purus. Non nisi est sit amet facilisis magna etiam tempor orci. A diam sollicitudin tempor id. Viverra justo nec ultrices dui sapien eget mi proin.
          </p>
          <br/>
          <p>
            Consequat nisl vel pretium lectus quam id. Augue lacus viverra vitae congue eu consequat. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. In fermentum et sollicitudin ac orci phasellus egestas. Diam sit amet nisl suscipit adipiscing bibendum. Faucibus vitae aliquet nec ullamcorper. Etiam erat velit scelerisque in dictum non consectetur a erat. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Nulla facilisi nullam vehicula ipsum. Cras ornare arcu dui vivamus arcu felis. Senectus et netus et malesuada fames ac turpis egestas sed. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Facilisis leo vel fringilla est. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Nibh venenatis cras sed felis eget velit aliquet sagittis. Lacus vestibulum sed arcu non odio euismod lacinia at quis.
          </p>
          <br/>
          <p>
            Et pharetra pharetra massa massa. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Leo in vitae turpis massa sed. Malesuada nunc vel risus commodo. Auctor elit sed vulputate mi sit amet mauris commodo quis. Nec dui nunc mattis enim. Vulputate dignissim suspendisse in est ante in nibh. Proin fermentum leo vel orci porta non. Mi in nulla posuere sollicitudin aliquam. Nunc eget lorem dolor sed viverra. Sit amet tellus cras adipiscing enim. Quis blandit turpis cursus in hac habitasse. Quis blandit turpis cursus in. Sed viverra tellus in hac habitasse.
          </p>
          <br/>
          <p>
            Eros donec ac odio tempor orci dapibus ultrices. Consequat interdum varius sit amet mattis vulputate enim. Eu volutpat odio facilisis mauris. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Posuere sollicitudin aliquam ultrices sagittis. Urna cursus eget nunc scelerisque viverra mauris in. Porta nibh venenatis cras sed. Consequat semper viverra nam libero. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
          </p>
          <br/>
          <p>
            Facilisi etiam dignissim diam quis. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Nisl suscipit adipiscing bibendum est ultricies integer quis. Varius vel pharetra vel turpis nunc eget lorem. Malesuada pellentesque elit eget gravida cum sociis natoque. Lacinia quis vel eros donec. Facilisis gravida neque convallis a cras semper. Et tortor at risus viverra adipiscing at in tellus integer. Sed velit dignissim sodales ut eu sem integer vitae justo. Volutpat est velit egestas dui id ornare. Lacus luctus accumsan tortor posuere ac ut. Elit scelerisque mauris pellentesque pulvinar pellentesque. Id ornare arcu odio ut. Enim nec dui nunc mattis enim. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo.
          </p>
        </div>
      </section>
    </main>
  )
}