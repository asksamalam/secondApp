import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { single } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = signal('My Second Angular app');
}
