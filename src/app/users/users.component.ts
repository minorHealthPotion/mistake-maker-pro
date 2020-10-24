import { Component, OnInit } from "@angular/core";
import { DataHandleService } from "../data-handle.service";
import { User } from "../model/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private dataHandler: DataHandleService) {}

  ngOnInit() {
    this.dataHandler.usersSubject.subscribe(users => (this.users = users));
  }
}
