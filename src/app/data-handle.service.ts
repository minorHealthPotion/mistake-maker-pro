import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TestData } from "./data/TestData";
import { User } from "./model/User";
import { ReservationsRules } from "./model/ReservationsRules";
import { Counter } from "./data/TestData";

@Injectable({
  providedIn: "root"
})
export class DataHandleService {
  usersSubject = new BehaviorSubject<User[]>(TestData.users);
  counterSubject = new BehaviorSubject<ReservationsRules>(Counter.counter);
  constructor() {}
}
