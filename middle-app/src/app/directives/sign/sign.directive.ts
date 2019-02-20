import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSign]'
})
export class SignDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
