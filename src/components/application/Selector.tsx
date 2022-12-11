import {faSortDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FC, useEffect, useRef, useState} from "react";
import {SelectorPropsType, SelectorStateType} from "../../types/application/application.types";
import {useClickOutside} from "../../hooks/useClickOutside";

const initialState: SelectorStateType = {
  optionListIsVisible: false,
}

export const Selector: FC<SelectorPropsType> = props => {
  const {options} = props;
  const [state, setState] = useState({...initialState, selectedOption: options[0]});
  const selectorRef = useRef<HTMLInputElement>(null);
  useClickOutside(selectorRef, () => setState({...state, optionListIsVisible: false}));

  return (
    <div className={`selector ${state.optionListIsVisible ? 'active' : ''}`} ref={selectorRef}>
      <span className={"selected-option"}
            onClick={() => setState({...state, optionListIsVisible: !state.optionListIsVisible})}
      >
        {state.selectedOption?.name ?? '---'}
      </span>
      <FontAwesomeIcon icon={faSortDown} className={"sort-down-icon"} />
      {
        state.optionListIsVisible &&
          <div className={"option-list"}>
            {
              options.map((option, index) => (
                <div key={index}
                     className={"option"}
                     data-value={option.value}
                     onClick={() => setState({
                       ...state,
                       selectedOption: option,
                       optionListIsVisible: false
                     })}>
                  {option.name}
                </div>
              ))
            }
          </div>
      }
    </div>
  )
}