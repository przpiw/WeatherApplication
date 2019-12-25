class Weather {
    constructor(city,state) {
        this.apiKey = '16677f70a49e4be7a03ad7a5168ad07d'
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.weatherbit.io/v2.0/current?city=${this.city},${this.state}&key=${this.apiKey}`)
        const responseData = await response.json();

        return responseData;
    }

    // Change weather location

    changeLocation(city,state){
        this.city = city;
        this.state = state;
    }
}