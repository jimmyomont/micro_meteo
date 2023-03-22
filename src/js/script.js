const boulbi = document.getElementById('boulbi')
const bergerac = document.getElementById('berg')
const body = document.getElementById('body')
const card = document.getElementById('card')
const x = 48.84
const y = 2.24
const ville = 'Boulogne Billancourt'
document.getElementById('localisation').textContent = ville


fetch('https://api.open-meteo.com/v1/forecast?latitude=' + x + '&longitude=' + y + '&current_weather=true&timezone=auto')
    .then((resp) => resp.json()
        .then((data) => {
            console.log(data);
            document.getElementById('temp').textContent = data.current_weather.temperature + " °C";
            document.getElementById('code').textContent = weathercode(data.current_weather.weathercode);
            document.getElementById('speed').textContent = data.current_weather.windspeed + " km/h";
            document.getElementById('direction').textContent = 'Direction des vents : ' + oneDirection(data.current_weather.winddirection);
            document.getElementById('miseajour').textContent = 'Dernière mise à jour : ' + convertISO(data.current_weather.time);
        }))


function weathercode(code) {
    let result
    if (code < 1) {
        result = "Ciel clair"
        card.style.backgroundImage = "url(https://i.gifer.com/Lx0q.gif)";
        body.style.backgroundColor = "rgb(57, 135, 237)";
    }
    else if (code > 0 && code < 4) {
        result = "Nuageux",
            card.style.backgroundImage = "url(https://i.gifer.com/fzmZ.gif)";
        body.style.backgroundColor = "rgb(124, 136, 152)";
    }
    else if (code > 44 && code < 49) {
        result = "Brouillard"
        card.style.backgroundImage = "url(https://i.gifer.com/7Z6Q.gif)";
        body.style.backgroundColor = "rgb(110, 125, 145)";
    }
    else if (code > 50 && code < 56) {
        result = "Bruine légère"
        card.style.backgroundImage = "url(https://i.gifer.com/19Q3.gif)";
        body.style.backgroundColor = "rgb(174, 179, 184))";
    }
    else if (code > 55 && code < 57) {
        result = "Bruine verglaçante"
        card.style.backgroundImage = "url(https://i.gifer.com/19Q1.gif)";
        body.style.backgroundColor = "rgb(43, 67, 52)";
    }
    else if (code > 60 && code < 66) {
        result = "Pluie faible"
        card.style.backgroundImage = "url(https://i.gifer.com/IxI.gif)";
        body.style.backgroundColor = "rgb(15, 92, 45)";
    }
    else if (code > 65 && code < 68) {
        result = "Pluie verglaçante"
        card.style.backgroundImage = "url(https://i.gifer.com/7st6.gif)";
        body.style.backgroundColor = "rgb(180, 192, 185)";
    }
    else if (code > 70 && code < 76) {
        result = "Chute de neige"
        card.style.backgroundImage = "url(https://i.gifer.com/V5N.gif)";
        body.style.backgroundColor = "rgb(54, 56, 55)";
    }
    else if (code === 77) {
        result = "Grains de neige"
        card.style.backgroundImage = "url(https://i.gifer.com/4ht7.gif)";
        body.style.backgroundColor = "rgb(38, 38, 41)";
    }
    else if (code > 79 && code < 83) {
        result = "Averse de pluie"
        card.style.backgroundImage = "url(https://i.gifer.com/GWkS.gif)";
        body.style.backgroundColor = "rgb(34, 40, 24)";
    }
    else if (code > 84 && code < 87) {
        result = "Averse de neige"
        card.style.backgroundImage = "url(https://i.gifer.com/4VOA.gif)";
        body.style.backgroundColor = "rgb(164, 169, 172)";
    }
    else if (code === 95) {
        result = "orage"
        card.style.backgroundImage = "url(https://i.gifer.com/Pl9O.gif)";
        body.style.backgroundColor = "rgb(2, 39, 61)";
    }
    else if (code > 95 && code < 100) {
        result = "Orage avec grêle"
        card.style.backgroundImage = "url(https://i.gifer.com/Rnim.gif)";
        body.style.backgroundColor = "rgb(51, 68, 78)";
    }
    else { result = 'Inconnue' }
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

