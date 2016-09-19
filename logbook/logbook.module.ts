import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {routing} from "./logbook.routes";
import {LogbookMainComponent} from "./logbook-main.component";
import {LogbookListComponent} from "./logbook-list.component";
import {LogbookCreateComponent} from "./logbook-create.component";
import {LogbookUpdateComponent} from "./logbook-update.component";
import {LogbookRepositoryService} from "./logbook-repository.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        LogbookMainComponent,
        LogbookListComponent,
        LogbookCreateComponent,
        LogbookUpdateComponent
    ],
    providers: [
        LogbookRepositoryService
    ],
    bootstrap: [
        LogbookMainComponent
    ]
})
export class LogbookModule {
}
