import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

@Component({
  imports: [LandingPageComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'EasyPharma';
}
