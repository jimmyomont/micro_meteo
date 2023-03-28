
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

export default weathercode; 