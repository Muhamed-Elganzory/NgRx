import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {decrement, increment} from '../Store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  imports: [],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css'
})
export class CounterControlsComponent {

  _value: number = 1;

  constructor(private store: Store <{counter: number}>) { }

  increment(): void {
    this.store.dispatch(increment({value: this._value}));
  }

  decrement(): void {
    this.store.dispatch(decrement({value: this._value}));
  }
}
