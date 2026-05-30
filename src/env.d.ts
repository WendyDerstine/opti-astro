/// <reference path="../.astro/types.d.ts" />
interface Window {
    Alpine: import('alpinejs').Alpine;
}
declare namespace App {
    interface Locals {
        overrideSettings: any;
        overrideStyles: any;
    }
}
