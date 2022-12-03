import {FC} from "react";
import {FeedbackPropsType} from "../../types/home/home.types";

export const Feedback: FC<FeedbackPropsType> = props => {
  const {imagePath, author, authorTitle, cite} = props.data;

  return (
    <div className={"feedback"}>
      <header>
        <img src={imagePath} alt={"User image"} />
        <h3>{author}</h3>
        <span>{authorTitle}</span>
      </header>
      <div className={"content"}>
        <blockquote>
          <p>
            {cite}
          </p>
        </blockquote>
      </div>
    </div>
  )
}