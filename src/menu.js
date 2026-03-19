import bulbasaurImg from "./assets/burger-bulbasaur.png";
import charmanderImg from "./assets/burger-charmander.png";
import squirtleImg from "./assets/burger-squirtle.png";
import chikoritaImg from "./assets/burger-chikorita.png";
import cyndaquilImg from "./assets/burger-cyndaquil.png";
import totodileImg from "./assets/burger-totodile.png";

export function loadMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = ""; // Limpiamos la pantalla

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Nuestro Menú Pokémon";

    const grid = document.createElement("div");
    grid.classList.add("menu-grid");

    const burgers = [
        {
            name: "Bulbasaur Veggie Burger",
            description: "¡Un Látigo Cepa de sabor! Hamburguesa 100% plant-based con lechuga fresca, palta, cebolla morada y nuestra salsa secreta de hierbas.",
            price: "$12.50",
            img: bulbasaurImg
        },
        {
            name: "Charmander Spicy Burger",
            description: "Para los valientes. Doble carne, queso cheddar derretido, jalapeños al rojo vivo y una salsa ascuas picante que te hará escupir fuego.",
            price: "$14.00",
            img: charmanderImg
        },
        {
            name: "Squirtle Surf & Turf",
            description: "Refréscate con esta combinación: Medallón de carne premium, langostinos a la plancha, rúcula y una suave mayonesa de ajo 'Pistola Agua'.",
            price: "$15.50",
            img: squirtleImg
        },
        {
            name: "Chikorita Crispy Chicken",
            description: "Crujiente pollo frito con hojas verdes orgánicas y una vinagreta dulce de miel y mostaza. Tan tierna como una hoja mágica.",
            price: "$13.00",
            img: chikoritaImg
        },
        {
            name: "Cyndaquil BBQ Smash",
            description: "Doble smash burger caramelizada con abundante salsa barbacoa (BBQ), aros de cebolla fritos y tocino ahumado. ¡Explosión de sabor!",
            price: "$14.50",
            img: cyndaquilImg
        },
        {
            name: "Totodile Blue Cheese",
            description: "Una mordida potente. Carne gruesa, queso azul intenso, cebolla caramelizada y champiñones salteados. ¡Cuidado con su Triturar!",
            price: "$15.00",
            img: totodileImg
        }
    ];

    burgers.forEach(burger => {
        const card = document.createElement("div");
        card.classList.add("menu-card");

        const img = document.createElement("img");
        img.src = burger.img;
        img.alt = burger.name;

        const info = document.createElement("div");
        info.classList.add("menu-info");

        const name = document.createElement("h3");
        name.classList.add("menu-name");
        name.textContent = burger.name;

        const desc = document.createElement("p");
        desc.classList.add("menu-desc");
        desc.textContent = burger.description;

        const bottomRow = document.createElement("div");
        bottomRow.classList.add("menu-bottom-row");

        const price = document.createElement("span");
        price.classList.add("menu-price");
        price.textContent = burger.price;

        const btn = document.createElement("button");
        btn.classList.add("btn-menu-add");
        btn.textContent = "+";

        bottomRow.appendChild(price);
        bottomRow.appendChild(btn);

        info.appendChild(name);
        info.appendChild(desc);
        info.appendChild(bottomRow);

        card.appendChild(img);
        card.appendChild(info);

        grid.appendChild(card);
    });

    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(grid);
    content.appendChild(menuContainer);
}
