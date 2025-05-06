import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherData: { [key: string]: { city: string; temperature: number; condition: string; humidity: number; windSpeed: number } } = {
    Fargo: {
      city: 'Fargo',
      temperature: 70,
      condition: 'Sunny',
      humidity: 50,
      windSpeed: 10
    },
    London: {
      city: 'London',
      temperature: 65,
      condition: 'Cloudy',
      humidity: 60,
      windSpeed: 5
    },
    'New York': {
      city: 'New York',
      temperature: 75,
      condition: 'Rainy',
      humidity: 55,
      windSpeed: 12
    },
    Tokyo: {
      city: 'Tokyo',
      temperature: 80,
      condition: 'Sunny',
      humidity: 70,
      windSpeed: 15
    },
    Sydney: {
      city: 'Sydney',
      temperature: 78,
      condition: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 8
    },
    'Los Angeles': {
      city: 'Los Angeles',
      temperature: 85,
      condition: 'Sunny',
      humidity: 40,
      windSpeed: 7
    }
  };

  forecastMap: { [key: string]: any[] } = {
    'fargo': [
      { day: 'Monday', temperature: 75, condition: 'Sunny' },
      { day: 'Tuesday', temperature: 72, condition: 'Cloudy' },
      { day: 'Wednesday', temperature: 68, condition: 'Rainy' },
      { day: 'Thursday', temperature: 70, condition: 'Sunny' },
      { day: 'Friday', temperature: 73, condition: 'Partly Cloudy' }
    ],
    'london': [
      { day: 'Monday', temperature: 65, condition: 'Cloudy' },
      { day: 'Tuesday', temperature: 63, condition: 'Rainy' },
      { day: 'Wednesday', temperature: 68, condition: 'Sunny' },
      { day: 'Thursday', temperature: 70, condition: 'Partly Cloudy' },
      { day: 'Friday', temperature: 72, condition: 'Sunny' }
    ],
    'new york': [
      { day: 'Monday', temperature: 75, condition: 'Sunny' },
      { day: 'Tuesday', temperature: 78, condition: 'Partly Cloudy' },
      { day: 'Wednesday', temperature: 80, condition: 'Rainy' },
      { day: 'Thursday', temperature: 82, condition: 'Sunny' },
      { day: 'Friday', temperature: 79, condition: 'Cloudy' }
    ],
    'tokyo': [
      { day: 'Monday', temperature: 80, condition: 'Sunny' },
      { day: 'Tuesday', temperature: 82, condition: 'Partly Cloudy' },
      { day: 'Wednesday', temperature: 85, condition: 'Rainy' },
      { day: 'Thursday', temperature: 87, condition: 'Sunny' },
      { day: 'Friday', temperature: 84, condition: 'Cloudy' }
    ],
    'sydney': [
      { day: 'Monday', temperature: 78, condition: 'Partly Cloudy' },
      { day: 'Tuesday', temperature: 80, condition: 'Sunny' },
      { day: 'Wednesday', temperature: 82, condition: 'Rainy' },
      { day: 'Thursday', temperature: 79, condition: 'Sunny' },
      { day: 'Friday', temperature: 81, condition: 'Cloudy' }
    ],
    'los angeles': [
      { day: 'Monday', temperature: 85, condition: 'Sunny' },
      { day: 'Tuesday', temperature: 87, condition: 'Partly Cloudy' },
      { day: 'Wednesday', temperature: 90, condition: 'Sunny' },
      { day: 'Thursday', temperature: 88, condition: 'Cloudy' },
      { day: 'Friday', temperature: 86, condition: 'Sunny' }
    ]
  };

  constructor() {}

  getWeatherData(city: string): any | null {
    const matchKey = Object.keys(this.weatherData).find(
      key => key.toLowerCase() === city.trim().toLowerCase()
    );
    return matchKey ? this.weatherData[matchKey] : null;
  }

  getForecastData(city: string): any[] {
    const normalized = city.trim().toLowerCase();
    return this.forecastMap[normalized] || [];
  }
}
