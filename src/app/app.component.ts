import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, iAppState, increment } from './store/app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-demo';

  constructor(private store: Store<{app: iAppState}>) {}

  public counter$ = this.store
  .select('app')
  .pipe(
    map(e => e.counter)
  );

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }
}
