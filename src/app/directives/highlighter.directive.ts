import { Directive, effect, ElementRef, inject, input, isStandalone } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
})
export class HighlighterDirective {
  isComplete = input(false);
  el = inject(ElementRef);

 styleEffect = effect(()=> {
  if(!this.isComplete()){
    this.el.nativeElement.style.backgroundColor  = "#023b11";
  } else {
 
    this.el.nativeElement.style.backgroundColor = "#704402";
  }
 })


}
