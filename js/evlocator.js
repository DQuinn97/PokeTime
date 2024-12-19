//EV, route, region, note
let ev_string = `
ATK, JOHTO, rt36, no nidorina/vulpix;
SPATK, JOHTO, ilex f, surf;
SPD, KANTO, diglett c, ;
SPD, SINNOH, rt218, starly;
SPD, KANTO, rt24, daytime;
SPATK, KANTO, rt24, nighttime;
HP, KANTO, rt24, morning;
SPATK, KANTO, pkmn tower basement, ghastly (uncommon);
SPATK, KANTO, verm. graveyard, ghastly/haunter;
SPD, KANTO, verm. graveyard, rattata/raticate/zubat;
`;

//names for the different Effort Values
let EV = {
    HP: "health points",
    ATK: "attack",
    DEF: "defence",
    SPATK: "special attack",
    SPDEF: "special defence",
    SPD: "speed"
}
//names for the different Regions
let REGION = {
    KANTO: "kanto",
    JOHTO: "johto",
    HOENN: "hoenn",
    SINNOH: "sinnoh"
};

ev_string = ev_string.replace(/\n/g, '').split(';');
ev_string.splice(-1, 1);
for (let i in ev_string) {
    ev_string[i] = ev_string[i].split(',');
    ev_string[i][0] = Object.keys(EV).find(key => key === ev_string[i][0].trim()) || null;
    ev_string[i][1] = REGION[ev_string[i][1].trim()];
    ev_string[i][2] = ev_string[i][2].trim()
        .replace('rt', 'route ')
        .replace(/\sf$/, ' forest')
        .replace(/\sc$/, ' cave');
    ev_string[i][3] = ev_string[i][3].trim();
};

const evlocate = (value) => {
    let result = [];
    for (let ev of ev_string.filter(ev => ev[0] == value).sort((a, b) => b[1] < a[1] ? 1 : -1)) {
        result.push(`${ev[2]} (${ev[1]})<br>&emsp;note: ${ev[3]}`);
    }
    document.getElementById('output2').innerHTML = result.join('<br><br>');
}