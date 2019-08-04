import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  
  @Output() changeGameState: EventEmitter<number> = new EventEmitter()
  @Output() deadReset: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  
  continue() {
    this.changeGameState.emit(1)
  }

}
