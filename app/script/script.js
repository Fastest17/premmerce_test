menu.onclick = function mobMenu() {
    var x = document.getElementById('links');

    if (x.className === 'header__nav') {
        x.className += ' responsive'
    } else {
        x.className = 'header__nav';
    }
};