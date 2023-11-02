document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (!nombre || !email || !mensaje) {
        document.getElementById('mensaje-error').textContent = 'Por favor, complete todos los campos.';
    } else {
        
        document.getElementById('mensaje-error').textContent = 'Formulario enviado correctamente.';
    }
});
