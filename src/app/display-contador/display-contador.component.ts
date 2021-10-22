import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { iAppState } from '../store/app.state';


@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.css']
})
export class DisplayContadorComponent implements OnInit {

  constructor(private store: Store<{app: iAppState}>) { }

  public counter$ = this.store.select('app').pipe(map(e => e.counter));

  ngOnInit(): void {
    //this.counter$ = this.store.pipe(select('counterReducer'))
  }

}
