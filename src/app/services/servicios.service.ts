import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }

  getFondos(): string[] {
    return [
      'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/1_pwo0yv.webp")',
      'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/5_dddgms.webp")',
      'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/2_yydl7h.webp")',
      'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/4_dtyjco.webp")',
      // 'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/3_uhc9ef.webp")',
      // 'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/6_pkvsua.webp")',
      // 'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/7_crcdbm.webp")',
      // 'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/8_wniyv2.webp")',
      // 'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/9_m0fpzj.webp")',
      // 'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/10_taxipd.webp")',
      // 'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/11_etn2ib.webp")',  
      // 'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/12_mst9yl.webp")',
      // 'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569814/13_e9wwwm.webp")',
      // 'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569814/14_bki0kv.webp")',
      // 'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569814/15_ynel2i.webp")',
      'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569814/16_jfzu9g.webp")'
    ];
  }
}
