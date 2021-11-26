import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCor]'
})
export class CorDirective {

  constructor(private elementRef: ElementRef) { 

    this.elementRef.nativeElement.style.backgroundColor = 'blue'

  }

}
