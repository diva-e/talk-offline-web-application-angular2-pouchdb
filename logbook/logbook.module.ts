import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {routing} from "./logbook.routes";
import {LogbookMainComponent} from "./logbook-main.component";
import {LogbookListComponent} from "./logbook-list.component";
import {LogbookCreateComponent} from "./logbook-create.component";
import {LogbookUpdateComponent} from "./logbook-update.component";

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        LogbookMainComponent,
        LogbookListComponent,
        LogbookCreateComponent,
        LogbookUpdateComponent
    ],
    bootstrap: [
        LogbookMainComponent
    ]
})
export class LogbookModule {
}
