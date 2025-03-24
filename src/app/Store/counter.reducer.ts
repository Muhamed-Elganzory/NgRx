import {createReducer, on} from '@ngrx/store';
import {decrement, increment} from './counter.actions';

const initialState: number = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state: number, action: {value: number}): number => state + action.value),
  on(decrement, (state: number, action: {value: number}): number => state - action.value),
);
