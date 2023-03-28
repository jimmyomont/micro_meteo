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
export default oneDirection; 