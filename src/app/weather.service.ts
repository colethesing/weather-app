import { Injectable } from '@angular/core';

export interface HourlyForecast {
  time: string;
  temp: number;
  condition: string;
  windSpeed: number;
  windDirection: string;
}

export interface ForecastDay {
  day: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  hourly: HourlyForecast[];
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherData: { [key: string]: { city: string; temperature: number; condition: string; humidity: number; windSpeed: number } } = {
    Fargo:         { city: 'Fargo',         temperature: 70, condition: 'Sunny',         humidity: 50, windSpeed: 10 },
    London:        { city: 'London',        temperature: 65, condition: 'Cloudy',        humidity: 60, windSpeed: 5  },
    'New York':    { city: 'New York',      temperature: 75, condition: 'Rainy',         humidity: 55, windSpeed: 12 },
    Tokyo:         { city: 'Tokyo',         temperature: 80, condition: 'Sunny',         humidity: 70, windSpeed: 15 },
    Sydney:        { city: 'Sydney',        temperature: 78, condition: 'Partly Cloudy', humidity: 65, windSpeed: 8  },
    'Los Angeles': { city: 'Los Angeles',  temperature: 85, condition: 'Sunny',         humidity: 40, windSpeed: 7  }
  };

  forecastMap: { [key: string]: ForecastDay[] } = {
    'fargo': [
      {
        day: 'Monday', temperature: 75, condition: 'Sunny', humidity: 55, windSpeed: 12, windDirection: 'NE',
        hourly: [
          { time: '6:00 AM', temp: 60, condition: 'Clear', windSpeed: 5, windDirection: 'NE' },
          { time: '12:00 PM', temp: 75, condition: 'Sunny', windSpeed: 12, windDirection: 'NW' },
          { time: '6:00 PM', temp: 68, condition: 'Partly Cloudy', windSpeed: 6, windDirection: 'SE' }
        ]
      },
      {
        day: 'Tuesday', temperature: 72, condition: 'Cloudy', humidity: 60, windSpeed: 11, windDirection: 'E',
        hourly: [
          { time: '6:00 AM', temp: 58, condition: 'Fog', windSpeed: 10, windDirection: 'SW' },
          { time: '12:00 PM', temp: 72, condition: 'Cloudy', windSpeed: 8, windDirection: 'SW' },
          { time: '6:00 PM', temp: 65, condition: 'Cloudy', windSpeed: 11, windDirection: 'NE' }
        ]
      },
      {
        day: 'Wednesday', temperature: 68, condition: 'Rainy', humidity: 70, windSpeed: 15, windDirection: 'S',
        hourly: [
          { time: '6:00 AM', temp: 62, condition: 'Rain', windSpeed: 11, windDirection: 'N' },
          { time: '12:00 PM', temp: 68, condition: 'Showers', windSpeed: 15, windDirection: 'S' },
          { time: '6:00 PM', temp: 64, condition: 'Rain', windSpeed: 9, windDirection: 'S' }
        ]
      },
      {
        day: 'Thursday', temperature: 70, condition: 'Sunny', humidity: 50, windSpeed: 8,  windDirection: 'NW',
        hourly: [
          { time: '6:00 AM', temp: 61, condition: 'Clear', windSpeed: 8, windDirection: 'NW' },
          { time: '12:00 PM', temp: 70, condition: 'Sunny', windSpeed: 2, windDirection: 'SE' },
          { time: '6:00 PM', temp: 66, condition: 'Clear', windSpeed: 4, windDirection: 'S' }
        ]
      },
      {
        day: 'Friday', temperature: 73, condition: 'Partly Cloudy', humidity: 58, windSpeed: 9,  windDirection: 'W',
        hourly: [
          { time: '6:00 AM', temp: 63, condition: 'Cloudy', windSpeed: 9, windDirection: 'E' },
          { time: '12:00 PM', temp: 73, condition: 'Partly Cloudy', windSpeed: 6, windDirection: 'W' },
          { time: '6:00 PM', temp: 67, condition: 'Cloudy', windSpeed: 1, windDirection: 'NW' }
        ]
      }
    ],

    'london': [
      {
        day: 'Monday', temperature: 65, condition: 'Cloudy', humidity: 65, windSpeed: 7,  windDirection: 'SE',
        hourly: [
          { time: '6:00 AM', temp: 50, condition: 'Fog', windSpeed: 7, windDirection: 'NE' },
          { time: '12:00 PM', temp: 65, condition: 'Cloudy', windSpeed: 2, windDirection: 'E' },
          { time: '6:00 PM', temp: 60, condition: 'Cloudy', windSpeed: 3, windDirection: 'NE' }
        ]
      },
      {
        day: 'Tuesday', temperature: 63, condition: 'Rainy', humidity: 75, windSpeed: 12, windDirection: 'S',
        hourly: [
          { time: '6:00 AM', temp: 52, condition: 'Showers', windSpeed: 12, windDirection: 'SW' },
          { time: '12:00 PM', temp: 63, condition: 'Rainy', windSpeed: 11, windDirection: 'S' },
          { time: '6:00 PM', temp: 58, condition: 'Rainy', windSpeed: 10, windDirection: 'E' }
        ]
      },
      {
        day: 'Wednesday', temperature: 68, condition: 'Sunny', humidity: 60, windSpeed: 9,  windDirection: 'SW',
        hourly: [
          { time: '6:00 AM', temp: 55, condition: 'Clear', windSpeed: 9, windDirection: 'N' },
          { time: '12:00 PM', temp: 68, condition: 'Sunny', windSpeed: 4, windDirection: 'N' },
          { time: '6:00 PM', temp: 64, condition: 'Partly Cloudy', windSpeed: 4, windDirection: 'NW' }
        ]
      },
      {
        day: 'Thursday', temperature: 70, condition: 'Partly Cloudy', humidity: 58, windSpeed: 8,  windDirection: 'W',
        hourly: [
          { time: '6:00 AM', temp: 56, condition: 'Cloudy', windSpeed: 8, windDirection: 'SW' },
          { time: '12:00 PM', temp: 70, condition: 'Partly Cloudy', windSpeed: 1, windDirection: 'SE' },
          { time: '6:00 PM', temp: 65, condition: 'Cloudy', windSpeed: 2, windDirection: 'SE' }
        ]
      },
      {
        day: 'Friday', temperature: 72, condition: 'Sunny', humidity: 55, windSpeed: 6,  windDirection: 'NW',
        hourly: [
          { time: '6:00 AM', temp: 57, condition: 'Clear', windSpeed: 6, windDirection: 'W' },
          { time: '12:00 PM', temp: 72, condition: 'Sunny', windSpeed: 3, windDirection: 'W' },
          { time: '6:00 PM', temp: 68, condition: 'Clear', windSpeed: 1, windDirection: 'SE' }
        ]
      }
    ],

    'new york': [
      {
        day: 'Monday', temperature: 75, condition: 'Sunny', humidity: 55, windSpeed: 10, windDirection: 'NE',
        hourly: [
          { time: '6:00 AM', temp: 60, condition: 'Clear', windSpeed: 10, windDirection: 'SW' },
          { time: '12:00 PM', temp: 75, condition: 'Sunny', windSpeed: 6, windDirection: 'SE' },
          { time: '6:00 PM', temp: 70, condition: 'Partly Cloudy', windSpeed: 7, windDirection: 'S' }
        ]
      },
      {
        day: 'Tuesday', temperature: 78, condition: 'Partly Cloudy', humidity: 50, windSpeed: 8,  windDirection: 'E',
        hourly: [
          { time: '6:00 AM', temp: 62, condition: 'Cloudy', windSpeed: 8, windDirection: 'N' },
          { time: '12:00 PM', temp: 78, condition: 'Partly Cloudy', windSpeed: 4, windDirection: 'NE' },
          { time: '6:00 PM', temp: 72, condition: 'Cloudy', windSpeed: 3, windDirection: 'NW' }
        ]
      },
      {
        day: 'Wednesday', temperature: 80, condition: 'Rainy', humidity: 65, windSpeed: 14, windDirection: 'SE',
        hourly: [
          { time: '6:00 AM', temp: 66, condition: 'Rain', windSpeed: 14, windDirection: 'W' },
          { time: '12:00 PM', temp: 80, condition: 'Showers', windSpeed: 12, windDirection: 'SW' },
          { time: '6:00 PM', temp: 75, condition: 'Rain', windSpeed: 13, windDirection: 'NW' }
        ]
      },
      {
        day: 'Thursday', temperature: 82, condition: 'Sunny', humidity: 45, windSpeed: 12, windDirection: 'S',
        hourly: [
          { time: '6:00 AM', temp: 65, condition: 'Clear', windSpeed: 12, windDirection: 'N' },
          { time: '12:00 PM', temp: 82, condition: 'Sunny', windSpeed: 10, windDirection: 'NE' },
          { time: '6:00 PM', temp: 78, condition: 'Clear', windSpeed: 7, windDirection: 'NE' }
        ]
      },
      {
        day: 'Friday', temperature: 79, condition: 'Cloudy', humidity: 60, windSpeed: 9,  windDirection: 'SW',
        hourly: [
          { time: '6:00 AM', temp: 67, condition: 'Cloudy', windSpeed: 9, windDirection: 'SE' },
          { time: '12:00 PM', temp: 79, condition: 'Cloudy', windSpeed: 2, windDirection: 'SE' },
          { time: '6:00 PM', temp: 74, condition: 'Partly Cloudy', windSpeed: 5, windDirection: 'S' }
        ]
      }
    ],

    'tokyo': [
      {
        day: 'Monday', temperature: 80, condition: 'Sunny', humidity: 70, windSpeed: 15, windDirection: 'NE',
        hourly: [
          { time: '6:00 AM', temp: 68, condition: 'Clear', windSpeed: 15, windDirection: 'SW' },
          { time: '12:00 PM', temp: 80, condition: 'Sunny', windSpeed: 14, windDirection: 'SW' },
          { time: '6:00 PM', temp: 75, condition: 'Humid', windSpeed: 11, windDirection: 'NW' }
        ]
      },
      {
        day: 'Tuesday', temperature: 82, condition: 'Partly Cloudy', humidity: 65, windSpeed: 12, windDirection: 'E',
        hourly: [
          { time: '6:00 AM', temp: 70, condition: 'Cloudy', windSpeed: 12, windDirection: 'E' },
          { time: '12:00 PM', temp: 82, condition: 'Partly Cloudy', windSpeed: 10, windDirection: 'N' },
          { time: '6:00 PM', temp: 78, condition: 'Cloudy', windSpeed: 3, windDirection: 'S' }
        ]
      },
      {
        day: 'Wednesday', temperature: 85, condition: 'Rainy', humidity: 80, windSpeed: 18, windDirection: 'S',
        hourly: [
          { time: '6:00 AM', temp: 75, condition: 'Rain', windSpeed: 18, windDirection: 'S' },
          { time: '12:00 PM', temp: 85, condition: 'Showers', windSpeed: 15, windDirection: 'N' },
          { time: '6:00 PM', temp: 82, condition: 'Rain', windSpeed: 17, windDirection: 'W' }
        ]
      },
      {
        day: 'Thursday', temperature: 87, condition: 'Sunny', humidity: 60, windSpeed: 14, windDirection: 'W',
        hourly: [
          { time: '6:00 AM', temp: 72, condition: 'Clear', windSpeed: 14, windDirection: 'NE' },
          { time: '12:00 PM', temp: 87, condition: 'Sunny', windSpeed: 11, windDirection: 'N' },
          { time: '6:00 PM', temp: 80, condition: 'Clear', windSpeed: 6, windDirection: 'SW' }
        ]
      },
      {
        day: 'Friday', temperature: 84, condition: 'Cloudy', humidity: 68, windSpeed: 10, windDirection: 'NW',
        hourly: [
          { time: '6:00 AM', temp: 74, condition: 'Cloudy', windSpeed: 10, windDirection: 'SW' },
          { time: '12:00 PM', temp: 84, condition: 'Cloudy', windSpeed: 5, windDirection: 'NE' },
          { time: '6:00 PM', temp: 79, condition: 'Partly Cloudy', windSpeed: 6, windDirection: 'N' }
        ]
      }
    ],

    'sydney': [
      {
        day: 'Monday', temperature: 78, condition: 'Partly Cloudy', humidity: 65, windSpeed: 8,  windDirection: 'SE',
        hourly: [
          { time: '6:00 AM', temp: 68, condition: 'Cloudy', windSpeed: 8, windDirection: 'N' },
          { time: '12:00 PM', temp: 78, condition: 'Partly Cloudy', windSpeed: 4, windDirection: 'S' },
          { time: '6:00 PM', temp: 75, condition: 'Clear', windSpeed: 2, windDirection: 'W' }
        ]
      },
      {
        day: 'Tuesday', temperature: 80, condition: 'Sunny', humidity: 60, windSpeed: 7,  windDirection: 'S',
        hourly: [
          { time: '6:00 AM', temp: 70, condition: 'Clear', windSpeed: 7, windDirection: 'S' },
          { time: '12:00 PM', temp: 80, condition: 'Sunny', windSpeed: 2, windDirection: 'W' },
          { time: '6:00 PM', temp: 76, condition: 'Clear', windSpeed: 6, windDirection: 'E' }
        ]
      },
      {
        day: 'Wednesday', temperature: 82, condition: 'Rainy', humidity: 75, windSpeed: 13, windDirection: 'SW',
        hourly: [
          { time: '6:00 AM', temp: 72, condition: 'Rain', windSpeed: 13, windDirection: 'SE' },
          { time: '12:00 PM', temp: 82, condition: 'Showers', windSpeed: 11, windDirection: 'SW' },
          { time: '6:00 PM', temp: 78, condition: 'Rain', windSpeed: 7, windDirection: 'NW' }
        ]
      },
      {
        day: 'Thursday', temperature: 79, condition: 'Sunny', humidity: 58, windSpeed: 9,  windDirection: 'NW',
        hourly: [
          { time: '6:00 AM', temp: 71, condition: 'Clear', windSpeed: 9, windDirection: 'NW' },
          { time: '12:00 PM', temp: 79, condition: 'Sunny', windSpeed: 2, windDirection: 'NE' },
          { time: '6:00 PM', temp: 77, condition: 'Clear', windSpeed: 5, windDirection: 'NE' }
        ]
      },
      {
        day: 'Friday', temperature: 81, condition: 'Cloudy', humidity: 63, windSpeed: 10, windDirection: 'W',
        hourly: [
          { time: '6:00 AM', temp: 73, condition: 'Cloudy', windSpeed: 10, windDirection: 'N' },
          { time: '12:00 PM', temp: 81, condition: 'Cloudy', windSpeed: 4, windDirection: 'N' },
          { time: '6:00 PM', temp: 78, condition: 'Cloudy', windSpeed: 6, windDirection: 'N' }
        ]
      }
    ],

    'los angeles': [
      {
        day: 'Monday', temperature: 85, condition: 'Sunny', humidity: 45, windSpeed: 7,  windDirection: 'NE',
        hourly: [
          { time: '6:00 AM', temp: 65, condition: 'Clear', windSpeed: 6, windDirection: 'S' },
          { time: '12:00 PM', temp: 85, condition: 'Sunny', windSpeed: 7, windDirection: 'SW' },
          { time: '6:00 PM', temp: 80, condition: 'Clear', windSpeed: 2, windDirection: 'NE' }
        ]
      },
      {
        day: 'Tuesday', temperature: 87, condition: 'Partly Cloudy', humidity: 50, windSpeed: 8,  windDirection: 'E',
        hourly: [
          { time: '6:00 AM', temp: 67, condition: 'Cloudy', windSpeed: 4, windDirection: 'N' },
          { time: '12:00 PM', temp: 87, condition: 'Partly Cloudy', windSpeed: 8, windDirection: 'NW' },
          { time: '6:00 PM', temp: 82, condition: 'Clear', windSpeed: 2, windDirection: 'NE' }
        ]
      },
      {
        day: 'Wednesday', temperature: 90, condition: 'Sunny', humidity: 40, windSpeed: 6,  windDirection: 'S',
        hourly: [
          { time: '6:00 AM', temp: 68, condition: 'Clear', windSpeed: 6, windDirection: 'S' },
          { time: '12:00 PM', temp: 90, condition: 'Sunny', windSpeed: 2, windDirection: 'SW' },
          { time: '6:00 PM', temp: 85, condition: 'Clear', windSpeed: 1, windDirection: 'S' }
        ]
      },
      {
        day: 'Thursday', temperature: 88, condition: 'Cloudy', humidity: 55, windSpeed: 9,  windDirection: 'SW',
        hourly: [
          { time: '6:00 AM', temp: 70, condition: 'Cloudy', windSpeed: 5, windDirection: 'E' },
          { time: '12:00 PM', temp: 88, condition: 'Cloudy', windSpeed: 2, windDirection: 'E' },
          { time: '6:00 PM', temp: 83, condition: 'Cloudy', windSpeed: 9, windDirection: 'W' }
        ]
      },
      {
        day: 'Friday', temperature: 86, condition: 'Sunny', humidity: 48, windSpeed: 7,  windDirection: 'NW',
        hourly: [
          { time: '6:00 AM', temp: 67, condition: 'Clear', windSpeed: 7, windDirection: 'W' },
          { time: '12:00 PM', temp: 86, condition: 'Sunny', windSpeed: 2, windDirection: 'E' },
          { time: '6:00 PM', temp: 84, condition: 'Clear', windSpeed: 6, windDirection: 'N' }
        ]
      }
    ]
  };

  constructor() {}

  getWeatherData(city: string) {
    const key = Object.keys(this.weatherData)
      .find(k => k.toLowerCase() === city.trim().toLowerCase());
    return key ? this.weatherData[key] : null;
  }

  getForecastData(city: string): ForecastDay[] {
    const key = city.trim().toLowerCase();
    return this.forecastMap[key] || [];
  }
}