export class LogbookEntry {

    static readonly TYPE = 'logbook-entry';

    id:String;
    rev:String;
    title:String;
    content:String;
    meta:String;
    created:Date;
    updated:Date;

    compareTo(other:LogbookEntry):Number {
        return this.created.valueOf() - other.created.valueOf();
    }

}
