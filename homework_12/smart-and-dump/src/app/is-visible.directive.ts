import { Directive, ElementRef, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  constructor(private e: ElementRef, private r: Renderer2) { 
    r.setStyle(e.nativeElement, 'font-size', '22px');
  }

  @Input('appIsVisible') isVisible: boolean = true;
  @HostBinding('style.visibility') elementVisible;

  ngOnInit() {
    this.elementVisible = this.isVisible ? 'visible' : 'hidden';
  }
}
