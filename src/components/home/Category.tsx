import {FC} from "react";
import {Link} from "react-router-dom";
import {CategoryPropsType} from "../../types/home/home.types";

export const Category: FC<CategoryPropsType> = props => {
  const {imagePath, categoryName, url} = props.data;

  return (
    <div className={"categories-list-item"}>
      <div className={"image-wrapper"}>
        <img src={imagePath} alt={categoryName} />
      </div>
      <div className={"content"}>
        <h3>{categoryName}</h3>
        <Link to={url} replace={true} className={"button button-red"}>View</Link>
      </div>
    </div>
  )
}