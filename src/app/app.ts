import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Garante que é compatível com a v19
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>` // O HTML fica só isso!
})
export class App {}
