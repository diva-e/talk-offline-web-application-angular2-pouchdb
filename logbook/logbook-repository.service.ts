import {LogbookEntry} from "./logbook-entry";
import {LogbookRepositoryObserver} from "./logbook-repository-observer";

declare let PouchDB:any;
declare let emit:Function;

export class LogbookRepositoryService {

    private pouchDb:any;
    private observer:Array<LogbookRepositoryObserver> = [];

    constructor() {
        this.pouchDb = new PouchDB('data');
    }

    registerObserver(observer:LogbookRepositoryObserver):void {
        if (!this.observer.includes(observer)) {
            this.observer.push(observer);
        }
    }

    unregisterObserver(observer:LogbookRepositoryObserver):void {
        var index:number = this.observer.indexOf(observer);
        if (index > -1) {
            this.observer.splice(index, 1);
        }
    }

    notifyObserver():void {
        this.observer.forEach((observer:LogbookRepositoryObserver) => observer.notify());
    }

    fetchEntries():Promise<Array<LogbookEntry>> {
        return new Promise((resolve, reject) => {
            let mapFunc:Function = (doc:any) => emit(doc.type);

            let options:Object = {
                key: LogbookEntry.TYPE,
                include_docs: true
            };

            this.pouchDb.query(mapFunc, options)
                .then((result:any) => {
                    let entries:Array<LogbookEntry> = result.rows.map((row:any) => this.mapObjectToEntry(row.doc));
                    entries.sort((one:LogbookEntry, two:LogbookEntry) => two.compareTo(one));
                    resolve(entries);
                })
                .catch(reject);
        });
    }

    fetchEntry(id:String):Promise<LogbookEntry> {
        return new Promise((resolve, reject) => {
            this.pouchDb.get(id)
                .then((object:any) => {
                    let entry:LogbookEntry = this.mapObjectToEntry(object);
                    resolve(entry);
                })
                .catch(reject);
        });
    }

    saveEntry(entry:LogbookEntry):Promise<LogbookEntry> {
        return new Promise((resolve, reject) => {
            let object:Object = this.mapEntryToObject(entry);
            this.pouchDb.put(object)
                .then(() => {
                    this.notifyObserver();
                    resolve(entry)
                })
                .catch(reject);
        });
    }

    deleteEntry(entry:LogbookEntry):Promise<LogbookEntry> {
        return new Promise((resolve, reject) => {
            let object:Object = this.mapEntryToObject(entry);
            this.pouchDb.remove(object)
                .then(() => {
                    this.notifyObserver();
                    resolve(entry)
                })
                .catch(reject);
        });
    }

    private mapObjectToEntry(object:any):LogbookEntry {
        let entry:LogbookEntry = new LogbookEntry();
        entry.id = object._id;
        entry.rev = object._rev;
        entry.title = object.title;
        entry.content = object.content;
        entry.meta = object.meta;
        entry.created = new Date(object.created);
        entry.updated = new Date(object.updated);
        return entry
    }

    private mapEntryToObject(entry:LogbookEntry):Object {
        return {
            _id: entry.id,
            _rev: entry.rev,
            type: LogbookEntry.TYPE,
            title: entry.title,
            content: entry.content,
            meta: entry.meta,
            created: entry.created.toISOString(),
            updated: entry.updated.toISOString()
        };
    }

}
