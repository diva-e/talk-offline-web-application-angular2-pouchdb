export class LogbookEntry {

    static readonly TYPE = 'logbook-entry';

    id:String = Date.now().toString();
    rev:String;
    title:String;
    content:String;
    meta:String;

}
