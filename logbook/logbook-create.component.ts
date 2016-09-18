import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";

declare let UIkit:any;

@Component({
    templateUrl: 'logbook/logbook-create.component.html'
})
export class LogbookCreateComponent implements OnInit, OnDestroy {

    constructor(private router:Router) {
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
        this.router.navigate(['/']);
    }

    cancel():void {
        this.router.navigate(['/']);
    }

}
