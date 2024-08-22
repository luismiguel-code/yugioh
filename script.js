// URL de la API (ejemplo usando JSONPlaceholder)
const apiURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?format=speed%20duel";

// Función para obtener y mostrar los datos
function obtenerYMostrarDatos() {
    // Hacer la solicitud a la API
    fetch(apiURL)
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            console.log(data)
            // Crear el contenedor de la lista en HTML
            let listaHTML = "<ul>";

            // Recorrer los datos y agregar cada elemento como un <li> a la lista
            data.forEach(card => {
                listaHTML += `<li>${card.name}</li>`;
            });

            listaHTML += "</ul>"; // Cerrar la lista desordenada

            // Insertar la lista en el contenedor del HTML
            document.getElementById("lista-container").innerHTML = listaHTML;
        })
        .catch(error => console.error("Error al obtener los datos:", error));
}

// Llamar a la función para obtener y mostrar los datos
obtenerYMostrarDatos();