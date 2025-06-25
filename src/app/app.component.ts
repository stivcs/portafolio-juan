import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // 👈 Scroll hacia arriba en cada ruta
    });
  }
  imageList: string[] = [
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750648209/1a_nzih8k.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/1_pwo0yv.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/5_dddgms.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/2_yydl7h.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/4_dtyjco.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/3_uhc9ef.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/6_pkvsua.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/7_crcdbm.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/8_wniyv2.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/9_m0fpzj.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/10_taxipd.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/11_etn2ib.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/12_mst9yl.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569814/13_e9wwwm.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569814/14_bki0kv.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569814/15_ynel2i.webp',
    'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569814/16_jfzu9g.webp'
  ];
  title = 'portafolio-juan';
  menuOpen = false;
  animateLogo = false;
  showSplash = true;
  currentIndex = 0;
  currentBackground = `url("${this.imageList[0]}")`;
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
    }, 4000);

    setInterval(() => {
      const nextIndex = (this.currentIndex + 1) % this.imageList.length;
      const nextImageUrl = this.imageList[nextIndex];

      // Pre-carga la imagen manualmente
      const img = new Image();
      img.src = nextImageUrl;
      img.onload = () => {
        // Cuando la imagen esté lista, cambia el fondo
        this.currentBackground = `url("${nextImageUrl}")`;
        this.currentIndex = nextIndex;
      };
    }, 5000);
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
