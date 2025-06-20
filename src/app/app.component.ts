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
  imageList = [
    'url("fondos/FONDOS/1.jpg")',
    'url("fondos/FONDOS/2.jpg")',
    'url("fondos/FONDOS/3.jpg")',
    'url("fondos/FONDOS/4.jpg")',
    'url("fondos/FONDOS/5.jpg")',
    'url("fondos/FONDOS/6.jpg")',
    'url("fondos/FONDOS/7.jpg")',
    'url("fondos/FONDOS/8.jpg")',
    'url("fondos/FONDOS/9.jpg")',
    'url("fondos/FONDOS/10.jpg")',
    'url("fondos/FONDOS/11.jpg")',
    'url("fondos/FONDOS/12.jpg")',
    'url("fondos/FONDOS/13.jpg")',
    'url("fondos/FONDOS/14.jpg")',
    'url("fondos/FONDOS/15.jpg")'
  ];
  title = 'portafolio-juan';
  animateLogo = false;
  showSplash = true;
  currentBackground = this.imageList[0];
  currentIndex = 0;
  @ViewChild('splashLogo') splashLogo!: ElementRef<HTMLDivElement>;
  @ViewChild('logoTarget') logoTarget!: ElementRef<HTMLDivElement>;

  ngOnInit() {
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

    const splashRect = splash.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const deltaX = targetRect.left + targetRect.width / 2 - (splashRect.left + splashRect.width / 2);
    const deltaY = targetRect.top + targetRect.height / 2 - (splashRect.top + splashRect.height / 2);

    const scale = targetRect.height / splashRect.height;

    splash.style.transition = 'transform 1s ease-in-out';
    splash.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
  }
}
