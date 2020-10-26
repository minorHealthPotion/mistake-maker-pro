import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TestData } from "./data/TestData";
import { User } from "./model/User";
import { ReservationsRules } from "./model/ReservationsRules";

@Injectable({
  providedIn: "root"
})
export class DataHandleService {
  usersSubject = new BehaviorSubject<User[]>(TestData.users);
  constructor() {}
}
