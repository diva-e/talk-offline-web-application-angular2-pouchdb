import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {LogbookRepositoryService} from "./logbook-repository.service";
import {LogbookEntry} from "./logbook-entry";

declare let UIkit:any;

@Component({
    templateUrl: 'logbook/logbook-update.component.html'
})
export class LogbookUpdateComponent implements OnInit, OnDestroy {

    entry:LogbookEntry = new LogbookEntry();

    constructor(private router:Router, private activatedRoute:ActivatedRoute, private repository:LogbookRepositoryService) {
    }

    ngOnInit() {
        this.activatedRoute.params.forEach((params:Params) => {
            let id:String = params['id'];
            this.repository.fetchEntry(id)
                .then((entry:LogbookEntry) => this.entry = entry)
                .then(() => {
                    let uikitModal = UIkit.modal('#modal');
                    uikitModal.show();
                })
        });
    }

    ngOnDestroy() {
        let uikitModal = UIkit.modal('#modal');
        if (uikitModal.isActive()) {
            uikitModal.hide();
        }
    }

    update():void {
        this.entry.updated = new Date();

        this.repository.saveEntry(this.entry)
            .then(() => this.router.navigate(['/']));
    }

    cancel():void {
        this.router.navigate(['/']);
    }

    delete():void {
        this.repository.deleteEntry(this.entry)
            .then(() => this.router.navigate(['/']));
    }

}
