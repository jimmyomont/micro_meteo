// http://erikflowers.github.io/weather-icons 
const time = document.getElementById('Time')
const location = document.getElementById('location')
const temp = document.getElementById('temp')
const weatherCode = document.getElementById('coverage')
const rain = document.getElementById('rain')
// const icon = document.getElementById('icon')
const wi = document.querySelector('.wi')
console.log(wi);
            const now = new Date()
            const annee = now.getFullYear()
            const mois = now.getMonth()
            const jour = now.getDate()
            const heure = now.getHours()
            const min = now.getMinutes()
            const sec = now.getSeconds()
            console.log(jour);
            // document.getElementById('code').textContent = `${jour} / ${mois} / ${annee}`
            // document.getElementById('Time').textContent = heure + " : " + min

let nb=-1;
const xy = [
    { city: 'Boulogne Billancourt', 
        x : '48.84', 
        y : '2.24', 
    },
    { city: 'Libye', 
        x :'28.00', 
        y : '17.00',
    },
    { city: 'Antarctique', 
        x :'80.22', 
        y : '77.21',
    },
];





function coordonnees(){
if(nb==xy.length-1){
    nb=0;
}
else{
    nb++;
}
document.getElementById('location').textContent =xy[nb].city;
let x = xy[nb].x;
let y = xy[nb].y; 
apiMeteo(x , y)
}
setInterval(coordonnees,6000);

let apiMeteo = function(x , y){
    fetch('https://api.open-meteo.com/v1/forecast?latitude=' + x + '&longitude=' + y + '&current_weather=true&timezone=auto&hourly=precipitation_probability&forecast_days=1&timezone=auto')
    .then((resp) => resp.json()
        .then((data) => {
            console.log(data);
            document.getElementById('temp').textContent = data.current_weather.temperature + " °C";
            weatherCode.textContent = weathercode(data.current_weather.weathercode);
            document.getElementById('wind').textContent = data.current_weather.windspeed + " km/h";
            document.getElementById('rain').textContent = data.hourly.precipitation_probability[heure] + " %";
            console.log(data.hourly.precipitation_probability[heure]);
            // document.getElementById('rain').textContent = data.hourly.precipitation_probability;
            // document.getElementById('rain').textContent = convertISO(data.hourly.time);
            document.getElementById('miseajour').textContent = 'Mise à jour : ' + convertISO(data.current_weather.time);
        }))
}

// function propability(pourcent) {
//     for (const iterator of object) {
        
//     }
// }
        
function weathercode(code) {
    let result
    if (code < 1) {
        result = "Ciel clair"
        icon.className = 'wi wi-day-sunny'
    }
    else if (code > 0 && code < 4) {
        result = "Nuageux"
        icon.className = 'wi wi-cloud'
    }
    else if (code > 44 && code < 49) {
        result = "Brouillard"
        icon.className = 'wi wi-fog'
    }
    else if (code > 50 && code < 56) {
        result = "Bruine légère"
        icon.className = 'wi wi-sleet'
    }
    else if (code > 55 && code < 57) {
        result = "Bruine verglaçante"
        icon.className = 'wi wi-snowflake-cold'
    }
    else if (code > 60 && code < 66) {
        result = "Pluie faible"
        icon.className = 'wi wi-showers'
    }
    else if (code > 65 && code < 68) {
        result = "Pluie verglaçante"
        icon.className = 'wi wi-snowflake-cold'
    }
    else if (code > 70 && code < 76) {
        result = "Chute de neige"
        icon.className = 'wi wi-snow-wind'
    }
    else if (code === 77) {
        result = "Grains de neige"
        icon.className = 'wi wi-rain-mix'
    }
    else if (code > 79 && code < 83) {
        result = "Averse de pluie"
        icon.className = 'wi wi-rain'
    }
    else if (code > 84 && code < 87) {
        result = "Averse de neige"
        icon.className = 'wi wi-snow'
    }
    else if (code === 95) {
        result = "orage"
        icon.className = 'wi wi-lightning'
    }
    else if (code > 95 && code < 100) {
        result = "Orage avec grêle"
        icon.className = 'wi wi-storm-showers'
    }
    else { result = 'Inconnue' }
    return result
}
function temperature (degre){
    let result
    if (degre < 5 ) {
        result = degre
        // card.style.border = "rgb(135, 212, 226) 10px solid";
        // body.style.backgroundColor = "rgb(135, 212, 226)";
    }

    else if (degre > 5 && degre < 14 ) {
        result = degre
        // card.style.border = "rgb(79, 169, 185) 10px solid";
        // body.style.backgroundColor = "rgb(79, 169, 185)";
    }
    else if (degre > 15 && degre < 18 ) {
        result = degre
        // card.style.border = "rgb(209, 133, 40) 10px solid";
        // body.style.backgroundColor = "rgb(209, 133, 40)";
    }
    else if (degre > 19 ) {
        result = degre
        // card.style.border = "rgb(232, 29, 22) 10px solid"
        // body.style.backgroundColor = "rgb(232, 29, 22)"
    }
    else  { result = degre}
    return result
}

function oneDirection(valeur) {
    let result
    if (valeur > 0 && valeur < 21) {
        result = 'Nord'
    }
    else if (valeur > 21 && valeur < 44) {
        result = 'Nord Nord Est'
    }
    else if (valeur > 44 && valeur < 66) {
        result = 'Nord Est'
    }
    else if (valeur > 66 && valeur < 89) {
        result = 'Est Nord Est'
    }
    else if (valeur > 89 && valeur < 112) {
        result = 'Est'
    }
    else if (valeur > 112 && valeur < 135) {
        result = 'Est Sud Est'
    }
    else if (valeur > 135 && valeur < 157) {
        result = 'Sud Est'
    }
    else if (valeur > 157 && valeur < 179) {
        result = 'Sud Sud Est'
    }
    else if (valeur > 179 && valeur < 201) {
        result = 'Sud'
    }
    else if (valeur > 201 && valeur < 224) {
        result = 'Sud Sud Ouest'
    }
    else if (valeur > 224 && valeur < 246) {
        result = 'Sud Ouest'
    }
    else if (valeur > 246 && valeur < 269) {
        result = 'Ouest Sud Ouest'
    }
    else if (valeur > 269 && valeur < 291) {
        result = 'Ouest'
    }
    else if (valeur > 291 && valeur < 314) {
        result = 'Ouest Nord Ouest'
    }
    else if (valeur > 314 && valeur < 350) {
        result = 'Nord Ouest'
    }
    else if (valeur > 350 && valeur < 365) {
        result = 'Nord Nord Ouest'
    }
    else { result = 'Inconnue' }
    return result
}

function convertISO(time) {
    let date = new Date(time);
    let result = date.toUTCString()
    return result
}

fetch('https://api.open-meteo.com/v1/forecast?latitude=28.00&longitude=17.00&current_weather=true&timezone=auto&=hourly=time')
    .then((resp) => resp.json()
        .then((data) => {

        }));