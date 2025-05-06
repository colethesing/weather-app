import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [FormsModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  availableCities = ['Fargo', 'London', 'New York', 'Tokyo', 'Sydney', 'Los Angeles'];
  weatherData: any;
  city = 'Fargo';
  error = '';

  constructor(private weatherService: WeatherService) { }

  forecastData: any[] = [];
  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    const normalizedCity = this.city.trim().toLowerCase();
  
    this.weatherData = this.weatherService.getWeatherData(normalizedCity);
    this.forecastData = this.weatherService.getForecastData(normalizedCity);
  
    this.error = this.weatherData ? '' : 'City not found in data.';
  }
}
