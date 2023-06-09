
import weathercode from './weatherCode'
import xy from './dataCoordonnees'
import oneDirection from './winDirection'
import temperature from './temperature'
const temp = document.getElementById('temp')
const weatherCode = document.getElementById('coverage')
const rain = document.getElementById('rain')
const now = new Date()
const fuseauHoraire = document.getElementById('fuseau')
const heure = now.getHours()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

document.getElementById('div_date').textContent = now.toLocaleDateString(undefined, options)

function coordonnees() {
    if (nb == xy.length - 1) {
        nb = 0;
    }
    else {
        nb++;
    }
    document.getElementById('location').textContent = xy[nb].city;
    fuseauHoraire.textContent = new Intl.DateTimeFormat('fr', { timeStyle: 'long', timeZone: xy[nb].fuseau }).format(new Date())
    let x = xy[nb].x;
    let y = xy[nb].y;
    apiMeteo(x, y)
}
let nb = -1;
let apiMeteo = function (x, y) {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=' + x + '&longitude=' + y + '&current_weather=true&timezone=auto&timezone=auto&hourly=precipitation_probability&forecast_days=1&timezone=auto')
        .then((resp) => resp.json()
            .then((data) => {
                temp.textContent = data.current_weather.temperature + " °C";
                weatherCode.textContent = weathercode(data.current_weather.weathercode);
                document.getElementById('wind').textContent = data.current_weather.windspeed;
                rain.textContent = data.hourly.precipitation_probability[heure] + " %";
                document.getElementById('miseajour').textContent = 'Mise à jour : ' + convertISO(data.current_weather.time);
            }))
}

coordonnees()
setInterval(coordonnees, 4000);

function convertISO(time) {
    let date = new Date(time);
    let result = date.toUTCString()
    return result
}

function myHorloge() {

    const date = new Date();
    document.getElementById("div_horloge").textContent = date.toLocaleTimeString();
    const testt = date.toLocaleTimeString()
    const test = Intl.DateTimeFormat({timeZone:'Australia/Sydney' }).format(testt)
    console.log(test);
}
setInterval(myHorloge, 1000);
myHorloge()