console.log('hello')
const card = document.getElementById('card');
card.addEventListener('click', function (e) {
    this.setAttribute('class', 'active card-3d');
})