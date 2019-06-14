import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app/app.reducers';
import { DividirAction, MultiplicarAction } from '../count.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  count: number;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('count').subscribe(count => {
      this.count = count;
      console.log(count);
    });
  }

  multiplicar() {
    const action = new MultiplicarAction(5);
    this.store.dispatch(action);
  }

  dividir() {
    const action = new DividirAction(5);
    this.store.dispatch(action);
  }

  resetNieto(newCount) {
    this.count = newCount;
    // this.changedCount.emit(this.count);
  }
}
