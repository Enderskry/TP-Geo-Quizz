import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timeLeft: number = 10;
  interval;


  @Output()
  startEvent = new EventEmitter<number>()
  

  constructor() { }

  ngOnInit() {
    
  }

  startTime(){
    this.interval = setInterval(() => {
      this.startEvent.emit(this.timeLeft);
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
      }
    },1000)
  }
}
