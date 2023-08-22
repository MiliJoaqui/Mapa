// your-script.js

// Inicializar el mapa
var map = L.map('map').setView([-27.4752595, -58.8526136], 20);

// Agregar una capa de mapa base (puedes usar otras fuentes de mapas)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Agregar un marcador
var marker = L.marker([51.5, -0.09]).addTo(map);

// Agregar una ventana emergente al marcador
marker.bindPopup("<b>¡Hola!</b><br>Estoy aquí.").openPopup();
