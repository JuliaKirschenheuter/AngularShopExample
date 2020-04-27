import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit{

  //       <span class="tooltiptext open">Эквив. ~150$</span>

  private _tooltipContext: HTMLSpanElement = this._render.createElement('span');

  constructor(
    private _render: Renderer2,
    private _elementRef: ElementRef
  ) { }

  @Input()
  public set appTooltip(text: string | number) {
    if (!text) return;
    this._tooltipContext.textContent = `${text}`;
  }

  public hide() {
    this._render.removeClass(this._tooltipContext, 'open');
  }

  public show() {
    this._render.addClass(this._tooltipContext, 'open');
  }

  ngOnInit(): void {
    this._render.addClass(this._tooltipContext, 'tooltiptext');
    this._render.appendChild(this._elementRef.nativeElement, this._tooltipContext);
  }

}
