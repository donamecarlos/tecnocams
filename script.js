document.getElementById('enviarWhatsApp').addEventListener('click', function() {
    // Obtener las opciones seleccionadas
    const camara1 = document.getElementById('combo-camara1').value;
    const camara2 = document.getElementById('combo-camara2').value;
    const camara3 = document.getElementById('combo-camara3').value;
    const windows11 = document.getElementById('windows11').value;
    const linux = document.getElementById('linux').value;
    const servicios = document.getElementById('servicios').value;

    // Construir el mensaje para WhatsApp
    const mensaje = `*Catálogo de Cámaras y Servicios Seleccionados:*\n\n` +
                    `Cámara 1: ${camara1}\n` +
                    `Cámara 2: ${camara2}\n` +
                    `Cámara 3: ${camara3}\n\n` +
                    `Windows 11: ${windows11}\n` +
                    `Linux: ${linux}\n\n` +
                    `Servicio Adicional: ${servicios}\n\n` +
                    `Envío realizado desde el catálogo de Tecnocams.`;

    // Codificar el mensaje y abrir WhatsApp
    const url = `https://wa.me/50581706924?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir WhatsApp con el mensaje predefinido
    window.open(url, '_blank');
});
