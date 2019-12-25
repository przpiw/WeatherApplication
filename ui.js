class UI {
    constructor(){
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.details = document.getElementById('w-details')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.feelsLike = document.getElementById('w-feels-like')
        this.dewPoint = document.getElementById('w-dewpoint')
        this.wind = document.getElementById('w-wind')
        this.uv = document.getElementById('w-uv')

    }

    paint(weather){
        
       this.location.textContent = weather.city_name;
       this.desc.textContent = weather.weather.description;
       this.string.textContent = weather.temp + " C";
       console.log(weather.weather)
       this.icon.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png `);
       this.humidity.textContent = `Relative Humidity: ${weather.rh} %`
       this.feelsLike.textContent = `Feels Like: ${weather.app_temp} C` 
       this.dewPoint.textContent = `DewPoint: ${weather.dewpt} C`
       this.wind.textContent = `Wind Speed: ${weather.wind_spd} m/s` 
       this.uv.textContent = `UV Index: ${weather.uv}` 

 


    }
}