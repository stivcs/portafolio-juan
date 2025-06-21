import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }

  getFondos(): string[] {
    return [
      'url("fondos/1.webp")',
      'url("fondos/2.webp")',
      'url("fondos/3.webp")',
      'url("fondos/4.webp")',
      'url("fondos/5.webp")',
      'url("fondos/6.webp")',
      'url("fondos/7.webp")',
      'url("fondos/8.webp")',
      'url("fondos/9.webp")',
      'url("fondos/10.webp")',
      'url("fondos/11.webp")',  
      'url("fondos/12.webp")',
      'url("fondos/13.webp")',
      'url("fondos/14.webp")',
      'url("fondos/15.webp")',
      'url("fondos/16.webp")'
    ];
  }
}
