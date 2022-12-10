import {faSortDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FC, useEffect, useRef, useState} from "react";
import {SelectorPropsType, SelectorStateType} from "../../types/application/application.types";

export const Selector: FC<SelectorPropsType> = props => {
  const {options} = props;
  const [state, setState] = useState({selectedOption: options[0], optionListIsVisible: false} as SelectorStateType);
  const selectorRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (event: Event) => {
    if (!state.optionListIsVisible)
      return;
    if (!selectorRef.current?.contains(event.target as HTMLInputElement))
      setState({...state, optionListIsVisible: false})
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectorRef]);

  return (
    <div className={"selector"} ref={selectorRef}>
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