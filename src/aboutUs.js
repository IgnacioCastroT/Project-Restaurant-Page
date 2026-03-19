import img_aboutUS from "./assets/aboutUs.png"
import burgerAboutUs from "./assets/tarjeta.png"
import map from "./assets/map.png"

export function loadAboutUs(){
    const content = document.querySelector("#content")

    // ── contenedor_photo ──────────────────────────
    let contenedor_photo = document.createElement("div")
    contenedor_photo.classList.add("contenedor_photo")

    let imgAboutUs = document.createElement("img")
    imgAboutUs.classList.add("img_aboutUs")
    imgAboutUs.src = img_aboutUS
    contenedor_photo.appendChild(imgAboutUs)

    let textAboutUs = document.createElement("div")
    textAboutUs.classList.add("textAboutUs")

    let from2025 = document.createElement("div")
    from2025.textContent = "Desde 2026"
    from2025.classList.add("from2025")
    textAboutUs.appendChild(from2025)

    let textH2 = document.createElement("h2")
    textH2.textContent = "Nuestra Historia"
    textAboutUs.appendChild(textH2) 

    let textH3 = document.createElement("h3")
    textH3.textContent = "De Pueblo Paleta a tu ciudad"
    textAboutUs.appendChild(textH3)

    contenedor_photo.appendChild(textAboutUs)
    content.appendChild(contenedor_photo)

    // ── container-medio-aboutUs ──────────────────────────────────────
    let containerMedio = document.createElement("div")
    containerMedio.classList.add("container-medio-aboutUs")

    // -- lado izquierdo
    let containerLeft = document.createElement("div")
    containerLeft.classList.add("container-left-aboutUs")

    let h3Left = document.createElement("h3")
    h3Left.textContent = "Un Viaje Unico"
    containerLeft.appendChild(h3Left)

    let description = document.createElement("div")
    description.classList.add("description_about")
    description.textContent = "Todo empezó en una pequeña cocina que parecía más un laboratorio del Profesor Oak que un restaurante. Queríamos capturar la esencia de cada región, desde los sabores picantes de las cuevas de fuego hasta la frescura de las rutas de hierba, y plasmarlos entre dos panes artesanales. Tras años de entrenamiento con la parrilla, logramos perfeccionar recetas que evolucionan en tu paladar."
    containerLeft.appendChild(description)

    // -- lado derecho
    let containerRight = document.createElement("div")
    containerRight.classList.add("container-right-aboutU")

    let imgBurger = document.createElement("img")
    imgBurger.classList.add("imgBurger_aboutUS")
    imgBurger.src = burgerAboutUs
    imgBurger.alt = "burgerAboutUs"
    containerRight.appendChild(imgBurger)

    containerMedio.appendChild(containerLeft)
    containerMedio.appendChild(containerRight)
    content.appendChild(containerMedio)

    // ── container_meet ─────
    let containerMeet = document.createElement("div")
    containerMeet.classList.add("container_meet")

    let h3Meet = document.createElement("h3")
    h3Meet.textContent = "Encuentranos"
    containerMeet.appendChild(h3Meet)

    let encuentranos = document.createElement("div")
    encuentranos.classList.add("encuentranos")

    // -- lado izquierdo
    let encuentranosLeft = document.createElement("div")
    encuentranosLeft.classList.add("encuentranos-left")

    let labelLocal = document.createElement("div")
    labelLocal.textContent = "Encuentra el local:"
    encuentranosLeft.appendChild(labelLocal)

    let pLocal = document.createElement("p")
    pLocal.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eveniet beatae debitis error, voluptas quas hic eaque quidem unde consectetur molestiae quasi expedita quos modi labore mollitia iusto atque. Quod."
    encuentranosLeft.appendChild(pLocal)

    // -- lado derecho
    let encuentranosRight = document.createElement("div")
    encuentranosRight.classList.add("encuentranos-right")

    let imgMap = document.createElement("img")
    imgMap.src = map
    imgMap.alt = "mapa"
    encuentranosRight.appendChild(imgMap)

    encuentranos.appendChild(encuentranosLeft)
    encuentranos.appendChild(encuentranosRight)
    containerMeet.appendChild(encuentranos)
    content.appendChild(containerMeet)
}