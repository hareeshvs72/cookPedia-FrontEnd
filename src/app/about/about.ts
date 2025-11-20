import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [Footer, Header, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
