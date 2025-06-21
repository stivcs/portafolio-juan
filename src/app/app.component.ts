import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiciosService } from './services/servicios.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private serviciosService: ServiciosService) { }
  imageList: string[] = [];
  title = 'portafolio-juan';
  animateLogo = false;
  showSplash = true;
  currentBackground = this.imageList[0];
  currentIndex = 0;
  esta: boolean = false;
  @ViewChild('splashLogo') splashLogo!: ElementRef<HTMLDivElement>;
  @ViewChild('logoTarget') logoTarget!: ElementRef<HTMLDivElement>;

  ngOnInit() {
    this.imageList = this.serviciosService.getFondos();
    setTimeout(() => {
      this.animateLogoToHeader();

      setTimeout(() => {
        this.showSplash = false;
      }, 1000);
    }, 2000);

    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
      this.currentBackground = this.imageList[this.currentIndex];
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
