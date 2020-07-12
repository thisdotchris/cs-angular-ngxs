import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from './../actions/tutorial.actions';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css'],
})
export class WriteComponent implements OnInit {
  constructor(private store: Store) {}

  addTutorial(name, url) {
    this.store.dispatch(new AddTutorial({ name: name, url: url }));
  }

  ngOnInit(): void {}
}
