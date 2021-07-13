import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  /**
   * M&eacute;todo que transforma una cadena por medio de un split
   *
   * @param text Cadena a realizar split
   * @param by Caracter por el cual se realiza el split
   * @param index index a recuperar
   * @returns Array de la cadena separada
   */
  transform(text: string, by: string, index: number = 1) {
    if (text) {
      const arr = text.split(by); // split text by "by" parameter
      return arr[index]; // after splitting to array return wanted index
    }
  }

}
