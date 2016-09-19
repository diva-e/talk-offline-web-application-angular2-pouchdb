import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {LogbookRepositoryService} from "./logbook-repository.service";
import {LogbookEntry} from "./logbook-entry";

declare let UIkit:any;

@Component({
    templateUrl: 'logbook/logbook-create.component.html'
})
export class LogbookCreateComponent implements OnInit, OnDestroy {

    entry:LogbookEntry = new LogbookEntry();

    constructor(private router:Router, private repository:LogbookRepositoryService) {
    }

    ngOnInit() {
        let uikitModal = UIkit.modal('#modal');
        uikitModal.show();
    }

    ngOnDestroy() {
        let uikitModal = UIkit.modal('#modal');
        if (uikitModal.isActive()) {
            uikitModal.hide();
        }
    }

    create():void {
        this.entry.id = Date.now().toString();
        this.entry.created = this.entry.updated = new Date();

        this.repository.saveEntry(this.entry)
            .then(() => this.router.navigate(['/']));
    }

    cancel():void {
        this.router.navigate(['/']);
    }

}
