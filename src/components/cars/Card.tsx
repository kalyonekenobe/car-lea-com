import {FC} from "react";
import {Link} from "react-router-dom";

export const Card: FC = () => {
  return (
    <div className={"card"}>
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/coupe.jpg`} alt={"Coupe"} />
        <h3>Audi R8</h3>
      </header>
      <div className={"card-content"}>

      </div>
      <footer>
        <Link to={'cars/1'} className={"button button-red"} >View details</Link>
      </footer>
    </div>
  )
}