# NgxLiburgIcon

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Code scaffolding
You have to added in your workspace
https://fontawesome.com/download

I was inspired by this logic 

https://plnkr.co/edit/eWi18QNOrzhrvVUbK1rH?p=preview&preview

  `
  
    constructor(mdIconRegistry, sanitizer) {
      matIconRegistry.addSvgIcon('icon1',sanitizer.bypassSecurityTrustResourceUrl('assets/icon1.svg'));
      matIconRegistry.addSvgIcon('icon2',sanitizer.bypassSecurityTrustResourceUrl('assets/icon2.svg'));
    }  

  ` 

## After installed 

In your project you should to have this structure 
  src -> assets -> icons -> brands.svg/regular.svg/solid.svgs

  Import module `IconCoreModule` in AppModule
  And you can use like that



    <mat-icon
      [svgIcon]="'fa_solid:person-through-window'"
      class="ml-1.5 mr-2.5"
    ></mat-icon>

  
  Enjoy this library :-) 
  

