import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  imageList: string[] = [
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/1_pwo0yv.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/5_dddgms.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/2_yydl7h.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/4_dtyjco.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/3_uhc9ef.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/6_pkvsua.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/7_crcdbm.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/8_wniyv2.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/9_m0fpzj.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/10_taxipd.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/11_etn2ib.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/12_mst9yl.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569814/13_e9wwwm.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569814/14_bki0kv.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569814/15_ynel2i.webp")',
    'url("https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569814/16_jfzu9g.webp")'
  ];
  title = 'portafolio-juan';
  animateLogo = false;
  showSplash = true;
  currentBackground = this.imageList[0];
  nextBackground = this.imageList[0]; // para precarga
  isImageReady = true;
  currentIndex = 0;
  showFirst = true;
  esta: boolean = false;
  @ViewChild('splashLogo') splashLogo!: ElementRef<HTMLDivElement>;
  @ViewChild('logoTarget') logoTarget!: ElementRef<HTMLDivElement>;

  ngOnInit() {
    // this.imageList = this.serviciosService.getFondos();
    setTimeout(() => {
      this.animateLogoToHeader();

      setTimeout(() => {
        this.showSplash = false;
      }, 1000);
    }, 2000);

    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
      this.showFirst = !this.showFirst; // cambia de capa y actualiza imagen
    }, 5000);
  }
  // Extrae la URL real del estilo background-image
  getUrlOnly(backgroundStyle: string): string {
    return backgroundStyle.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
  }

  // Llamado cuando se carga la imagen precargada
  onImageLoaded() {
    this.isImageReady = true;
    this.currentBackground = this.nextBackground;
  }

  animateLogoToHeader() {
    const splash = this.splashLogo.nativeElement;
    const target = this.logoTarget.nativeElement;

    // CENTRAR splash manualmente en pantalla (sin usar CSS transform)
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const splashWidth = splash.offsetWidth;
    const splashHeight = splash.offsetHeight;

    splash.style.left = `${(viewportWidth - splashWidth) / 2}px`;
    splash.style.top = `${(viewportHeight - splashHeight) / 2}px`;
    this.esta = true;

    // Esperamos un pequeño momento para que se aplique la posición

    const splashRect = splash.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const deltaX = targetRect.left + targetRect.width / 2 - (splashRect.left + splashRect.width / 2);
    const deltaY = targetRect.top + targetRect.height / 2 - (splashRect.top + splashRect.height / 2);
    const scale = targetRect.height / splashRect.height;

    splash.style.transition = 'transform 1s ease-in-out';
    splash.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;

  }
}
