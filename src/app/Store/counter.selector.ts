import { createSelector } from '@ngrx/store'

export const counterSelector = (state: {counter: number}): number => state.counter;
// export const counterDoubleSelector = (state: {counter: number}): number => state.counter * 2;

export const counterDoubleSelector = createSelector(counterSelector, (state) => state * 2);
