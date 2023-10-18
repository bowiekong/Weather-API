console.log( "test this" );

async function getData() {
    try {
let weather = {
    apiKey: "d3cb38f7aaec4b58995164736231710",
    fetchWeather: function (city) {
      fetch(
        "https://api.weatherapi.com/v1/current.json?key=d3cb38f7aaec4b58995164736231710&q=" + city + "&aqi=no"
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data.location;
        const { country } = data.location;
        const { icon, text } = data.current.condition;
        const { temp_c } = data.current;
        const { humidity } = data.current;
        const { wind_kph } = data.current;
        console.log(name, icon, text ,temp_c, humidity, wind_kph);
        document.querySelector(".name").innerText = name + "," + country;
        document.querySelector(".icon").src = icon;
        document.querySelector(".text").innerText = text;
        document.querySelector(".temp_c").innerText = temp_c + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind_kph").innerText = "Wind speed: " + wind_kph + " km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
            // Search button
        search: function () {
                  this.fetchWeather(document.querySelector(".search-bar").value);
                },
              };
            //   Click
        document.querySelector(".search button").addEventListener("click", function () {
                weather.search();
              });
            //   Keyup
        document.querySelector(".search-bar").addEventListener("keyup", function (event) {
                if (event.key == "Enter") {
                    weather.search();
                }
                });
            } catch( error ) {
                        console.log( `😒 Nope: ${error}` );
                    }
                }
                getData();