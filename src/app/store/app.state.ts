import { createAction, createReducer, on } from "@ngrx/store"

export interface iAppState {
  counter: number;
}

export const appInitialState: iAppState = {
  counter: 2
}

export const increment = createAction('[App] Aumenta contador');

export const decrement = createAction('[App] Diminui contador');

export const appReducer = createReducer (
  appInitialState,
  on(increment, (state) =>{
    state = {
      ...state,
      counter: state.counter + 1
    }
    return state;
  }),
  on(decrement, (state) =>{
    state = {
      ...state,
      counter: state.counter - 1
    }
    return state;
  })
)
