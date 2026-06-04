import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { LabPractice } from './sections/lab-practice/lab-practice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, LabPractice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
