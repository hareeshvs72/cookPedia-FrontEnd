import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-contact',
  imports: [Header,Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
