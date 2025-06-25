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
  visibleCount = 3; // cantidad de imágenes visibles
  private scrollListener: any;

  servicios = [
    {
      nombre: 'Fotografía de Conciertos',
      imagenes: [
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750826919/lzwec5ibiyvpv1cl7tin_pyupbw.webp', alt: 'Fotografía 1' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750826918/weh9pdxurdni9mi19326_jvtcow.webp', alt: 'Fotografía 2' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750826918/dodlshxg7l1756qnykpk_ncsoiy.webp', alt: 'Fotografía 3' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/11_etn2ib.webp', alt: 'Fotografía 4' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/4_dtyjco.webp', alt: 'Fotografía 5' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750826917/suaxlvbnf1q78eoobmhp_cbohcc.webp', alt: 'Fotografía 6' }
      ]
    },
    {
      nombre: 'Fotografia de estudio para modelos',
      imagenes: [
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750828395/_MG_2001_0000s_0004_5_wmtcs4.webp', alt: 'Producción 1' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750828394/_MG_2001_0001s_0001_Grupo_10_kyxfkf.webp', alt: 'Producción 2' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750828391/pgaddrjvcgf3gmi5u1ha_l0jkph.webp', alt: 'Producción 3' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750828392/_MG_2001_0002s_0000_Grupo_7_afvinb.webp', alt: 'Producción 4' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750828385/v1eyvxyl46qbxbweahoi_h1wb30.webp', alt: 'Producción 5' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750828390/yzikindqlmbz11mfycpr_h9ff8n.webp', alt: 'Producción 6' }
      ]
    },
    {
      nombre: 'Fotografías de productos',
      imagenes: [
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/12_mst9yl.webp', alt: 'Marketing 1' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/10_taxipd.webp', alt: 'Marketing 2' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/3_uhc9ef.webp', alt: 'Marketing 3' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/2_yydl7h.webp', alt: 'Marketing 4' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569813/9_m0fpzj.webp', alt: 'Marketing 5' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750827237/p1_tmppdo.webp', alt: 'Marketing 6' }
      ]
    },
    {
      nombre: 'Fotografía comercial',
      imagenes: [
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/6_pkvsua.webp', alt: 'Web 1' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/3_uhc9ef.webp', alt: 'Web 2' },
        { src: 'https://res.cloudinary.com/dkpl4dnuw/image/upload/v1750569812/4_dtyjco.webp', alt: 'Web 3' }
      ]
    }
  ];

  currentIndexes = [0, 0, 0, 0];

  ngOnInit() {
    this.setupScrollListener();
    this.updateVisibleCount();
    window.addEventListener('resize', this.updateVisibleCount.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
    window.removeEventListener('resize', this.updateVisibleCount.bind(this));
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

  private updateVisibleCount() {
    this.visibleCount = window.innerWidth < 768 ? 1 : 3;
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

    for (let i = 0; i < this.visibleCount; i++) {
      const index = (baseIndex + i) % servicio.imagenes.length;
      images.push(servicio.imagenes[index]);
    }

    return images;
  }
}
