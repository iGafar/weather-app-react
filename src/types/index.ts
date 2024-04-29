export interface ITime {
  dateTime: string;
  dayOfWeek: string;
}

export interface IDataDays {
  days: IWeatherData[];
}

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface IHourlyWeatherData {
  datetime: string;
  temp: number;
  icon: string;
  winddir: number;
  windspeed: number;
}

export interface IWeatherData {
  datetime: string;
  temp: number;
  feelslike: number;
  humidity: number;
  windspeed: number;
  pressure: number;
  uvindex: number;
  sunrise: string;
  sunset: string;
  conditions: string;
  icon: string;
  hours: IHourlyWeatherData[];
}
