const calc_weakness = () => {
    let pkmn = document.getElementById("weakness").value;
    pkmn = pkmn.replace(/^\w/, c => c.toUpperCase());
    
    let url = `https://bulbapedia.bulbagarden.net/wiki/${pkmn}_(Pok%C3%A9mon)#Type_effectiveness`;
    
    window.open(url, '_blank');
}