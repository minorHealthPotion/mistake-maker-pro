import { Component, OnInit } from "@angular/core";
import { DataHandleService } from "../data-handle.service";
import { ReservationsRules } from "../model/ReservationsRules";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  reservationsRules: ReservationsRules;
  constructor(private dataHandler: DataHandleService) {}

  ngOnInit() {
    this.dataHandler.reservationsRulesSubject.subscribe(
      reservationsRules => (this.reservationsRules = reservationsRules)
    );
    console.log(this.reservationsRules);
  }
}
