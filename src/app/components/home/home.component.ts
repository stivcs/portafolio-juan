import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

interface CarouselImage {
  src: string;
  alt: string;
}


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
   @ViewChild('servicesSection', { static: false }) servicesSection!: ElementRef;

  scrollY = 0;
  isVisible = false;
  private scrollListener: any;

  // Servicios y sus respectivas imágenes
  servicios: {
    nombre: string;
    imagenes: CarouselImage[];
  }[] = [
    {
      nombre: 'Fotografía de Conciertos',
      imagenes: [
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/1_pwo0yv.webp', alt: 'Fotografía 1' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/2_yydl7h.webp', alt: 'Fotografía 2' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/3_uhc9ef.webp', alt: 'Fotografía 3' }
      ]
    },
    {
      nombre: 'Fotografia de estudio para modelos',
      imagenes: [
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/4_dtyjco.webp', alt: 'Producción 1' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/5_dddgms.webp', alt: 'Producción 2' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/6_pkvsua.webp', alt: 'Producción 3' }
      ]
    },
    {
      nombre: 'Fotografias de productos',
      imagenes: [
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/2_yydl7h.webp', alt: 'Marketing 1' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/5_dddgms.webp', alt: 'Marketing 2' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/1_pwo0yv.webp', alt: 'Marketing 3' }
      ]
    },
    {
      nombre: 'Fotografia comercial',
      imagenes: [
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/6_pkvsua.webp', alt: 'Web 1' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/3_uhc9ef.webp', alt: 'Web 2' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/4_dtyjco.webp', alt: 'Web 3' }
      ]
    }
  ];

  // Índices de imagen actual para cada servicio
  currentIndexes = [0, 0, 0, 0];

  ngOnInit() {
    this.setupScrollListener();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  private setupScrollListener() {
    this.scrollListener = () => {
      this.scrollY = window.scrollY;
      if (this.servicesSection) {
        const rect = this.servicesSection.nativeElement.getBoundingClientRect();
        this.isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      }
    };
    window.addEventListener('scroll', this.scrollListener);
  }

  scrollToServices() {
    this.servicesSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  nextImage(index: number) {
    const servicio = this.servicios[index];
    this.currentIndexes[index] = (this.currentIndexes[index] + 1) % servicio.imagenes.length;
  }

  prevImage(index: number) {
    const servicio = this.servicios[index];
    this.currentIndexes[index] = (this.currentIndexes[index] - 1 + servicio.imagenes.length) % servicio.imagenes.length;
  }

  goToImage(servicioIndex: number, imageIndex: number) {
    this.currentIndexes[servicioIndex] = imageIndex;
  }

  getVisibleImages(servicioIndex: number): CarouselImage[] {
    const servicio = this.servicios[servicioIndex];
    const baseIndex = this.currentIndexes[servicioIndex];
    const images: CarouselImage[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (baseIndex + i) % servicio.imagenes.length;
      images.push(servicio.imagenes[index]);
    }
    return images;
  }

}

