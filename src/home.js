import pikachuImg from "./assets/burger-pikachu.png";
import { loadMenu } from "./menu.js";

export function loadHome() {
    const content = document.querySelector("#content");


    content.innerHTML = "";

    const principal = document.createElement("div");
    principal.classList.add("principal");

    const containerLeft = document.createElement("div");
    containerLeft.classList.add("container-left");

    const h2 = document.createElement("div");
    h2.classList.add("h2-description");
    h2.innerHTML = `¡Atrapalas todas... <span class="text-red">en tu paladar!</span>`;

    const h3 = document.createElement("div");
    h3.classList.add("h3-description");
    h3.textContent = "Disfruta de la fusión legendaria entre Pokémon y las mejores hamburguesas";

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("container-left-btn");

    const btn1 = document.createElement("button");
    btn1.classList.add("btn-order");
    btn1.textContent = "¡Haz tu pedido ya!";
    btn1.addEventListener("click", () => {
        alert("Navega al Menú para atrapar tu sabor favorito.");
        content.innerHTML = "";
        loadMenu();
    });

    const btn2 = document.createElement("button");
    btn2.classList.add("btn-secondary");
    btn2.textContent = "Ver Menú";
    btn2.addEventListener("click", () => {
        content.innerHTML = "";
        loadMenu();
    });

    btnContainer.appendChild(btn1);
    btnContainer.appendChild(btn2);

    containerLeft.appendChild(h2);
    containerLeft.appendChild(h3);
    containerLeft.appendChild(btnContainer);

    // ====================
    // IMAGEN
    // ====================
    const containerRight = document.createElement("div");
    containerRight.classList.add("container-right");

    const img = document.createElement("img");
    img.classList.add("img-pikachu");
    img.src = pikachuImg
    img.alt = "Pikachu img";

    containerRight.appendChild(img);

    principal.appendChild(containerLeft);
    principal.appendChild(containerRight);

    // ====================
    // HORARIO
    // ====================
    const horario = document.createElement("div");
    horario.classList.add("horario");

    const tituloHorario = document.createElement("div");
    tituloHorario.classList.add("horario-atencion");
    tituloHorario.textContent = "HORARIOS DE ATENCIÓN";

    const ul = document.createElement("ul");
    ul.classList.add("dias");

    const dias = [
        "LUN - JUE: 11:00 - 22:00",
        "VIE - SAB: 11:00 - 23:30",
        "DOM: 12:00 - 21:00"
    ];

    dias.forEach(dia => {
        const li = document.createElement("li");
        li.textContent = dia;
        ul.appendChild(li);
    });

    horario.appendChild(tituloHorario);
    horario.appendChild(ul);

    // ====================
    // FRASE CÉLEBRE
    // ====================
    const quote = document.createElement("div");
    quote.classList.add("home-quote");

    const quoteText = document.createElement("p");
    quoteText.innerHTML = `"No se trata solo de atrapar Pokémon...<br>se trata de <span class="text-red">saborearlos</span>."`;

    const quoteAuthor = document.createElement("span");
    quoteAuthor.classList.add("home-quote-author");
    quoteAuthor.textContent = "— Profesor Oak, después de visitar PokéBurger";

    quote.appendChild(quoteText);
    quote.appendChild(quoteAuthor);

    // ====================
    // AGREGAR TODO AL CONTENT
    // ====================
    content.appendChild(principal);
    content.appendChild(quote);
    content.appendChild(horario);
}

