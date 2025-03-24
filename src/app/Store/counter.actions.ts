import { createAction, props } from '@ngrx/store';

const INCREMENT = '[Counter] Increment';
const DECREMENT = '[Counter] Decrement';

export const increment= createAction(
  INCREMENT,
  props <{value: number} > ()
);

export const decrement = createAction(
  DECREMENT,
  props <{value: number} > ()
);
