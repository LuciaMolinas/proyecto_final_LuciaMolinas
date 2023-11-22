const form = document.querySelector('form');
const span_cb = document.getElementById('cb-validation');

form.addEventListener('submit', e => {
    const cb = document.querySelectorAll('label input:checked');
    if(cb.length < 7){
        span_cb.innerHTML = 'Si te faltan ingredientes no puedes hacer la receta';
        e.preventDefault( );
    } else {
        alert('Empezamos!')
    }
})  

