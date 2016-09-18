import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";

declare let UIkit:any;

@Component({
    templateUrl: 'logbook/logbook-update.component.html'
})
export class LogbookUpdateComponent implements OnInit, OnDestroy {

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

    update():void {
        this.router.navigate(['/']);
    }

    cancel():void {
        this.router.navigate(['/']);
    }

    delete():void {
        this.router.navigate(['/']);
    }

}
