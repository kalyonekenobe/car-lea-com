import {FC, useState} from "react";
import {
  PaginationButtonType,
  PaginationPropsType,
  PaginationStateType
} from "../../types/application/application.types";

export const Pagination: FC<PaginationPropsType> = props => {

  const generateVisibleButtons = (page: number): PaginationButtonType[] => {
    const numberOfPages = Math.floor((props.items.length + props.itemsPerPage - 1) / props.itemsPerPage);

    let visibleButtons: PaginationButtonType[] = [];
    visibleButtons.push({name: '1', number: 1});
    if (Math.min(page, Math.ceil(numberOfPages / 2)) - Math.floor(props.numberOfButtons / 2) - 1 > 1 && numberOfPages > props.numberOfButtons + 2) {
      visibleButtons.push({name: '...'})
    }
    const from = Math.max(2, Math.min(numberOfPages - props.numberOfButtons, page - Math.floor(props.numberOfButtons / 2)));
    const to = Math.min(Math.max(props.numberOfButtons + 1, page + Math.floor(props.numberOfButtons / 2)), numberOfPages - 1);
    for (let i = from; i <= to; i++) {
      visibleButtons.push({name: `${i}`, number: i})
    }
    if (Math.max(page, Math.ceil(numberOfPages / 2)) + Math.floor(props.numberOfButtons / 2) + 1 < numberOfPages && numberOfPages > props.numberOfButtons + 2) {
      visibleButtons.push({name: '...'})
    }
    visibleButtons.push({name: `${numberOfPages}`, number: numberOfPages});

    return visibleButtons;
  }

  const [state, setState] = useState({activePage: 1, visibleButtons: generateVisibleButtons(1)} as PaginationStateType);

  const setActivePage = (page: number) => {
    if (!page)
      return;
    setState({...state, activePage: page, visibleButtons: generateVisibleButtons(page)})
  }

  return (
    <div className={"pagination"}>
      <div className={"button-list"}>
        {
          state.visibleButtons?.map((button, index) => (
            <span key={index}
                  className={`${button.number === state.activePage ? `active` : ``}`}
                  onClick={() => {
                    if (button.number) {
                      setActivePage(button.number)
                    }
                  }}>
              {button.name}
            </span>
          ))
        }
      </div>
    </div>
  )
}