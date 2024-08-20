document.addEventListener("DOMContentLoaded", function() {
    fetch('./JS/menu.json')
        .then(response => response.json())
        .then(data => {
            populateMenu('entradas-container', data.entradas);
            populateMenu('platos-principales-container', data.platosPrincipales);
            populateMenu('postres-container', data.postres);
            populateDiscounts('descuentos-carousel', data.entradas.concat(data.platosPrincipales, data.postres));
        });

    function populateMenu(containerId, items) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Clear any existing content
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = item.imagen;
            img.alt = item.nombre;
            card.appendChild(img);

            const name = document.createElement('h3');
            name.textContent = item.nombre;
            card.appendChild(name);

            const price = document.createElement('p');
            price.textContent = `Precio: $${item.precio}`;
            card.appendChild(price);

            const ingredients = document.createElement('p');
            ingredients.textContent = `Ingredientes: ${item.ingredientes}`;
            card.appendChild(ingredients);

            const rating = document.createElement('p');
            rating.textContent = `Calificación: ${item.calificacion}`;
            card.appendChild(rating);

            if (item.descuento) {
                const discount = document.createElement('span');
                discount.className = 'discount-label';
                discount.textContent = item.descuento;
                card.appendChild(discount);
            }

            container.appendChild(card);
        });
    }

    function populateDiscounts(containerId, items) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Clear any existing content
        const discountedItems = items.filter(item => item.descuento);

        discountedItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'carousel-item';

            const img = document.createElement('img');
            img.src = item.imagen;
            img.alt = item.nombre;
            card.appendChild(img);

            const name = document.createElement('h3');
            name.textContent = item.nombre;
            card.appendChild(name);

            const price = document.createElement('p');
            price.textContent = `Precio: $${item.precio}`;
            card.appendChild(price);

            if (item.descuento) {
                const discount = document.createElement('span');
                discount.className = 'discount-label';
                discount.textContent = item.descuento;
                card.appendChild(discount);
            }

            container.appendChild(card);
        });
    }
});
