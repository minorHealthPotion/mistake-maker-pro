import { Component, OnInit } from "@angular/core";
import { DataHandleService } from "../data-handle.service";
import { ReservationsRules } from "../model/ReservationsRules";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  counter: ReservationsRules;
  constructor(private dataHandler: DataHandleService) {}

  ngOnInit() {
    this.dataHandler.counterSubject.subscribe(
      counter => (this.counter = counter)
    );
  }
}
