/* FOOTER 
function limitWords(textarea) {
    const maxCharacters = 120;
    let words = textarea.value.split(/\s+/).filter(word => word.length > 0);

    if (textarea.value.length > maxCharacters) {
        textarea.value = textarea.value.slice(0, maxCharacters);
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Límite de caracteres alcanzado',
            text: 'Has llegado al límite de texto permitido de 120 caracteres',
            confirmButtonText: 'Entendido'
        });
    }
} */

/* COFFEE API FETCH y GET*/


const imagenCafe = document.getElementById('imagen-cafe');

fetch('https://coffee.alexflipnote.dev/random')
    .then(response => response.json())
    .then(data => {
        imagenCafe.src = data.file;
    })
    .catch(error => console.error('Error al obtener la imagen:', error));