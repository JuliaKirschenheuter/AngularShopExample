import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUsd'
})
export class ToUsdPipe implements PipeTransform {

  transform(price: number, rate: number): number {
    return price / rate
  }

}
