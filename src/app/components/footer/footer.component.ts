import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface SocialLink {
  icon: string
  color: string
  name: string
  url: string
}
@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  correo = 'zeven.studioz@gmail.com';

  socialLinks: SocialLink[] = [
  {
    icon: "facebook", color: "btn-primary", name: "Facebook",
    url: "https://www.facebook.com/tuempresa"
  },
  {
    icon: "twitter-x", color: "btn-info", name: "Twitter",
    url: "https://twitter.com/tuempresa"
  },
  {
    icon: "instagram", color: "btn-danger", name: "Instagram",
    url: "https://www.instagram.com/zeven_raw/"
  },
  {
    icon: "linkedin", color: "btn-primary", name: "LinkedIn",
    url: "https://www.linkedin.com/company/tuempresa"
  },
]

  services: string[] = [
    'Fotografía de conciertos',
    'Fotografia de estudio para modelos',
    'Fotografia de producto',
    'Fotografia comercial',
  ];

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
