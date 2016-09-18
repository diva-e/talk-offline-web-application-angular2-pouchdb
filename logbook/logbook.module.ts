import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LogbookMainComponent} from "./logbook-main.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        LogbookMainComponent
    ],
    bootstrap: [
        LogbookMainComponent
    ]
})
export class LogbookModule {
}
