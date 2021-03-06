import {
  windowState,
  windowAction,
  windowActionTypes,
} from "../../types/window";

const initialState: windowState = {
  width: 0,
  is_mobile: false,
  scrollY: 0,
  scrollingUp: false,
  scrollingDown: false,
};

export const windowReducer = (
  state = initialState,
  action: windowAction
): windowState => {
  switch (action.type) {
    case windowActionTypes.UPDATE_WINDOW_SCROLL:
      return {
        ...state,
        scrollY: action.payload,
        scrollingUp: action.payload < state.scrollY,
        scrollingDown: action.payload > state.scrollY,
      };

    case windowActionTypes.UPDATE_WINDOW_WIDTH:
      return {
        ...state,
        width: action.payload,
        is_mobile: action.payload < 771,
      };

    default:
      return state;
  }
};
