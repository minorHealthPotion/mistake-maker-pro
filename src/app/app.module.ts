import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RowComponent } from './row/row.component';
import { DataHandleService } from './data-handle.service';
import { UsersComponent } from './users/users.component';
import { CounterComponent } from './counter/counter.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, RowComponent, UsersComponent, CounterComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers: [DataHandleService]
})
export class AppModule {}
