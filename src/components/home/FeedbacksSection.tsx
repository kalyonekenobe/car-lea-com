import React, {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FeedbacksSectionPropsType} from "../../types/home/home.types";

export const FeedbacksSection: FC<FeedbacksSectionPropsType> = ({children}) => {
  return (
    <section className={"feedbacks-section"}>
      <h2>Feedbacks</h2>
      <div className={"feedbacks-container"}>
        <div className={"controls left-arrow"}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className={"feedbacks"}>
          {children}
        </div>
        <div className={"controls right-arrow"}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </section>
  )
}