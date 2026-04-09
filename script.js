let lots = [];

function addLot() {
    const name = document.getElementById('lot-name').value;
    const price = parseFloat(document.getElementById('lot-price').value);

    if (!name || isNaN(price) || price <= 0) {
        alert('Введите корректные данные');
        return;
    }

    const lot = { id: Date.now(), name, price };
    lots.push(lot);
    document.getElementById('lot-name').value = '';
    document.getElementById('lot-price').value = '';
    renderLots();
}

function bid(id) {
    const lot = lots.find(l => l.id === id);
    const newPrice = parseFloat(prompt(`Ставка для ${lot.name}:`, lot.price));
    if (!isNaN(newPrice) && newPrice > lot.price) {
        lot.price = newPrice;
        renderLots();
    } else {
        alert('Ставка должна быть больше текущей');
    }
}

function renderLots() {
    const list = document.getElementById('lot-list');
    list.innerHTML = '';
    lots.forEach(lot => {
        const li = document.createElement('li');
        li.innerHTML = `${lot.name} — $${lot.price.toFixed(2)} 
                        <button onclick="bid(${lot.id})">Сделать ставку</button>`;
        list.appendChild(li);
    });
}
