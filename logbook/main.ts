import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {LogbookModule} from "./logbook.module";

const platform = platformBrowserDynamic();
platform.bootstrapModule(LogbookModule);
