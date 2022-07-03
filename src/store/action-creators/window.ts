import { windowAction, windowActionTypes } from "../../types/window";

export const fetchWindowWidth = (): windowAction => {
  return {
    type: windowActionTypes.UPDATE_WINDOW_WIDTH,
    payload: window.innerWidth,
  };
};

export const fetchWindowScroll = (): windowAction => {
  return {
    type: windowActionTypes.UPDATE_WINDOW_SCROLL,
    payload: window.scrollY,
  };
};
