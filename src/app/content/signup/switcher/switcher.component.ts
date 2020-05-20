import {Component, HostListener, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

type Cb = (checked: boolean) => void;

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitcherComponent,
      multi: true
    }
  ]
})
export class SwitcherComponent implements ControlValueAccessor {

  public checked: boolean;
  private _onChangeCallback: Cb;

  constructor() { }

  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(checked: any): void {
    this.checked = checked;
  }

  @HostListener('click')
  public toggle(): void {
    this.checked = !this.checked;
    this._onChangeCallback(this.checked);
  }


}
