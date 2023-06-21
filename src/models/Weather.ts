export interface Weather {
  dt: number
  sys: {
    sunrise: number
    sunset: number
  }
  main: {
    temp: number
  }
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
}
