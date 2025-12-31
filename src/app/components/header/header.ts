import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = signal('My Second Angular app');
}
