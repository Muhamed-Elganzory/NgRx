import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

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
  _double: number = 0;

  constructor(private store: Store <{counter: number}>) {
    this.count$ =  this.store.select('counter');

    this.count$.subscribe(count => {
      this._double = count * 2;
    })
  }
}
