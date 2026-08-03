import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Categories } from './components/categories/categories';
import { Carousel } from './components/carousel/carousel';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar, Categories, Body, Footer],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('project1');
}
