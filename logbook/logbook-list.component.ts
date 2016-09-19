import {Component, OnInit, OnDestroy} from "@angular/core";
import {LogbookEntry} from "./logbook-entry";
import {LogbookRepositoryService} from "./logbook-repository.service";
import {LogbookRepositoryObserver} from "./logbook-repository-observer";

@Component({
    templateUrl: 'logbook/logbook-list.component.html'
})
export class LogbookListComponent implements OnInit, OnDestroy, LogbookRepositoryObserver {

    entries:Array<LogbookEntry> = [];

    constructor(private repository:LogbookRepositoryService) {
    }

    ngOnInit() {
        this.repository.registerObserver(this);
        this.repository.fetchEntries()
            .then((entries:Array<LogbookEntry>) => this.entries = entries);
    }

    ngOnDestroy():void {
        this.repository.unregisterObserver(this);
    }

    notify():void {
        this.repository.fetchEntries()
            .then((entries:Array<LogbookEntry>) => this.entries = entries);
    }

}
