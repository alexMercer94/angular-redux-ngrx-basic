import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app/app.reducers';
import { ResetAction } from '../count.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  count: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('count').subscribe(count => {
      this.count = count;
    });
  }

  reset() {
    const action = new ResetAction();
    this.store.dispatch(action);
  }
}
