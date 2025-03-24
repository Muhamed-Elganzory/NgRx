import { createAction, props } from '@ngrx/store';

const INCREMENT: string = '[Counter] Increment';
const DECREMENT: string = '[Counter] Decrement';

export const increment= createAction(
  INCREMENT,
  props <{value: number} > ()
);

export const decrement = createAction(
  DECREMENT,
  props <{value: number} > ()
);
