import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent {
  availableCities = ['Fargo', 'London', 'New York', 'Tokyo', 'Sydney', 'Los Angeles'];
  city = 'Fargo';
  availableDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',];
  selectedDay: string = this.getToday();
  forecastData: any[] = [];
  filteredForecast: any = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getForecast();
  }

  getForecast(): void {
    const key = this.city.trim().toLowerCase();
    this.forecastData = this.weatherService.getForecastData(key) || [];
    this.filterForecastByDay();
  }

  filterForecastByDay(): void {
    this.filteredForecast = this.forecastData.find(day => day.day === this.selectedDay) || null;
  }

  getToday(): string {
    return this.availableDays[new Date().getDay()];
  }
}
