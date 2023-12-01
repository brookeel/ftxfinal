var items = document.querySelectorAll('.timeline li')

function elementInView(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top>= 0 &&
        rect.bottom<= (window.innerHeight || document.documentElement.clientHeight )
    )
}

function callBack() {
    for(var i=0; i < items.length; i++) {
        if(elementInView(items[i])) {
            items[i].classList.add("in-view")
        }
    }
}

function openModal(description) {
    var modal = document.getElementById('modal');
    var modalDescription = document.getElementById('modal-description');

    modalDescription.textContent = description;
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.onclick = function (event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

window.onload = callBack;
window.onresize = callBack;
window.onscroll = callBack;