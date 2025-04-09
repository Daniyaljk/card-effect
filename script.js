const cards = document.querySelectorAll('.card');
const body = document.body;

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveCard();
        card.classList.add('active');

        const bgColor = card.getAttribute("data-bg");
        body.style.background = bgColor;
    })
})

function removeActiveCard (){
    cards.forEach(card => {
        card.classList.remove('active');
    })
}
