document.getElementById('share-icon').onclick = function() {
    let div = document.getElementById('activeness-state');
    div.classList.toggle('none-active');
    div.classList.toggle('active');
}