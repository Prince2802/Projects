import { AfterViewInit, Component } from '@angular/core';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(
    private themeService: ThemeService,
    public googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngAfterViewInit(): void {
    this.themeService.setThemeSettings();
  }
}
