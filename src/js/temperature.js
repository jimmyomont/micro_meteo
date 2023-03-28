function temperature(degre) {
    let result
    if (degre < 5) {
        result = degre
        // card.style.border = "rgb(135, 212, 226) 10px solid";
        // body.style.backgroundColor = "rgb(135, 212, 226)";
    }

    else if (degre > 5 && degre < 14) {
        result = degre
        // card.style.border = "rgb(79, 169, 185) 10px solid";
        // body.style.backgroundColor = "rgb(79, 169, 185)";
    }
    else if (degre > 15 && degre < 18) {
        result = degre
        // card.style.border = "rgb(209, 133, 40) 10px solid";
        // body.style.backgroundColor = "rgb(209, 133, 40)";
    }
    else if (degre > 19) {
        result = degre
        // card.style.border = "rgb(232, 29, 22) 10px solid"
        // body.style.backgroundColor = "rgb(232, 29, 22)"
    }
    else { result = degre }
    return result
}
export default temperature;