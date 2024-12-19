const init = () => {
    [...document.getElementById('evlocate').children].forEach(option => {
        option.innerHTML = option.value.length ? option.value : "--- pick ---";
    })
}
