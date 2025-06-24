import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contactanos',
  imports: [CommonModule, FormsModule],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  cargando: boolean = false;

  sendEmail() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;

    this.cargando = true;
    emailjs.send(
      'service_roagdt5',
      'template_hyw6dhk',
      {
        title: 'Contacto desde el portafolio web',
        name: this.formData.name,
        email: this.formData.email,
        message: this.formData.message,
        time: new Date().toLocaleString()
      },
      'eNoqqyKZBO_p9_Y3J'
    ).then(
      (response) => {
        alert('Correo enviado correctamente!');
        this.formData = { name: '', email: '', message: '' };
        this.cargando = false;
      },
      (error) => {
        alert('Error al enviar el correo.');
        console.error(error);
        this.cargando = false;
      }
    );
  }
}
