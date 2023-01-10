import React, {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FeedbacksSectionPropsType} from "../../types/home/home.types";

export const FeedbacksSection: FC<FeedbacksSectionPropsType> = ({feedbacksState, children}) => {

  const [state, setState] = feedbacksState

  return (
    <section className={"feedbacks-section"}>
      <h2>Feedbacks</h2>
      <div className={"feedbacks-container"}>
        <div className={"controls left-arrow"} onClick={() => {
          let feedbacks = state.feedbacks;
          if (feedbacks.length > 0)
            feedbacks.push(feedbacks.shift()!)
          setState({
            ...state,
            feedbacks: feedbacks
          })
        }}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className={"feedbacks"}>
          {children}
        </div>
        <div className={"controls right-arrow"} onClick={() => {
          let feedbacks = state.feedbacks;
          if (feedbacks.length > 0)
            feedbacks.unshift(feedbacks.pop()!)
          setState({
            ...state,
            feedbacks: feedbacks
          })
        }}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </section>
  )
}