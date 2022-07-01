enum windowActionTypes {
  UPDATE_WINDOW_SCROLL = "UPDATE_WINDOW_SCROLL",
  UPDATE_WINDOW_WIDTH = "UPDATE_WINDOW_WIDTH",
}

interface windowState {
  width: number;
  is_mobile: boolean;
  scrollY: number;
  scrollingUp: boolean;
  scrollingDown: boolean;
}

interface UpdateWindowScrollAction {
  type: windowActionTypes.UPDATE_WINDOW_SCROLL;
  payload: number;
}

interface UpdateWindowWidthAction {
  type: windowActionTypes.UPDATE_WINDOW_WIDTH;
  payload: number;
}

type windowAction = UpdateWindowScrollAction | UpdateWindowWidthAction;

export { windowActionTypes };
export type { windowState, windowAction };
