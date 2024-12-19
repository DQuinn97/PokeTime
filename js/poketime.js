Number.prototype.padStart = function (count, c) {
    return Math.round(this.valueOf()).toString().padStart(count, c);
};

const poketime = () => {
    let input = document.getElementById("input");
    let time = 0;
    let h = input.value.indexOf('h');
    let m = input.value.indexOf('m');
    let s = input.value.indexOf('s');
    if (h !== -1) time += Number(input.value.substring(0, h)) * 60 * 60;
    if (m !== -1) time += Number(input.value.substring(h !== -1 ? h + 1 : 0, m)) * 60;
    if (s !== -1) time += Number(input.value.substring(m !== -1 ? m + 1 : h !== -1 ? h + 1 : 0, s));
    time = time / 20 * 3;

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - (hours * 3600)) / 60);
    let seconds = time - (hours * 3600) - (minutes * 60);

    document.getElementById("output").innerHTML = `${hours.padStart(2, '0')}h ${minutes.padStart(2, '0')}m ${seconds.padStart(2, '0')}s`;
};