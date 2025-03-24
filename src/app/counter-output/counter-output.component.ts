import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {counterSelector, counterDoubleSelector} from '../Store/counter.selector';

@Component({
  selector: 'app-counter-output',
  imports: [
    AsyncPipe
  ],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {

  count$: Observable <number>;
  double$: Observable <number>;

  constructor(private store: Store <{counter: number}>) {
    // this.count$ =  this.store.select('counter');

    this.count$ =  this.store.select(counterSelector);
    this.double$ = this.store.select(counterDoubleSelector);
  }


}
