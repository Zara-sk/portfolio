enum windowActionTypes {
  UPDATE_WINDOW_SCROLL = "UPDATE_WINDOW_SCROLL",
  UPDATE_WINDOW_WIDTH = "UPDATE_WINDOW_WIDTH",
}

interface windowState {
  width: number;
  scrollY: number;
  scrollingUp: boolean;
  scrollingDown: boolean;
}

interface windowAction {
  type: string;
  payload: number;
}

export { windowActionTypes };
export type { windowState, windowAction };
