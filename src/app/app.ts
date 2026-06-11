import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { LabPractice } from './sections/lab-practice/lab-practice';
import { Protozoans } from './sections/protozoans/protozoans';
import { Fungi } from './sections/fungi/fungi';
import { Data } from './sections/data/data';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, LabPractice, Protozoans, Fungi, Data, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
