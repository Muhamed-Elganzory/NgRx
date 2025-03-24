import {inject} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects"
import {Store} from "@ngrx/store"
import {decrement, increment } from "./counter.actions";
import { tap, withLatestFrom } from "rxjs";
import { counterSelector } from "./counter.selector";

export class CounterEffects {
  private readonly _actions = inject (Actions);
  private readonly store = inject (Store);

  saveIncrementCount = createEffect(
    () => this._actions.pipe(
      ofType(increment),
      withLatestFrom(this.store.select(counterSelector)),
      tap(([action, counterSelector]) => {
        console.log(counterSelector);
        console.log(action);
        localStorage.setItem("Counter Increment (NgRx)", counterSelector.toString());
      })
    ), {dispatch: false}
  );

  saveDecrementCount = createEffect(
    () => this._actions.pipe(
      ofType(decrement),
      withLatestFrom(this.store.select(counterSelector)),
      tap(([action, counterSelector]) => {
        console.log(counterSelector);
        localStorage.setItem("Counter Decrement (NgRx)", counterSelector.toString());
      })
    ), {dispatch: false}
  );
}
