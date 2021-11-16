function log(msg) {
    let div = document.createElement("div");
    div.innerText = msg;
    document.body.append(div);
}

function main() {
    log("Practice js");
    let age = 30;
    log("Type of age is " + typeof age);
    
    let male = true;
    log("Type of male is " + typeof male);

    let favLanguage = "JavaScript";
    log("Type of favLanguage is " + typeof favLanguage);

    {
        let name;
        log("Type of name is " + typeof name);
        name = "Ádám";
        log("Type of name is " + typeof name);
    }
    
    log("Ádám ihat?");
    if (age >= 18) {
        log("Igen");
    } else {
            log("Nem");
            return;
        }

    let beers = Number(window.prompt("Hány sört innál?", 5));
    if (isNan(beers)) {
        log("Ez nem egy szám");
        return;
    }

    for (let i = 0; i < beers; i++) {
        log(i + ". sör");   // típuskényszerítés 
    }
    
}

window.addEventListener("load", main);