import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementarAction } from 'src/components/contador/count.actions';
import { DecrementarAction } from '../components/contador/count.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number;

  constructor(private store: Store<AppState>) {
    // this.count = 10;
    this.store.select('count').subscribe(count => {
      this.count = count;
    });
  }

  incrementar() {
    // this.count += 1;
    const action = new IncrementarAction();

    this.store.dispatch(action);
  }

  decrementar() {
    // this.count -= 1;
    const action = new DecrementarAction();

    this.store.dispatch(action);
  }
}
