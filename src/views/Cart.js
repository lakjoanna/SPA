import { cartManager } from '../cart/cart-manager';
import { RemoveFromCartButton } from '../common/RemoveFromCartButton';

export function Cart() {
    const section = document.createElement('section');
    
    section.innerHTML = `
        <h2>Zamówienie</h2>
        <p>Oto zawartość Twojego zamówienia.</p>
    `;

    const table = document.createElement('table');
    table.classList.add('table');

    const tableHead = document.createElement('tr');
    tableHead.innerHTML = `
        <th>Zamówienie</th>
        <th>Cena</th>
        <th></th>
    `;

    const tableRows = cartManager.getAllItems().map(item => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)} zł</td>
            <td></td>
        `;

        tr.lastElementChild.append(RemoveFromCartButton(item));

        return tr;
    });

    const tableFooter = document.createElement('tr');
    tableFooter.innerHTML = `
        <td></td>
        <td>
            <strong>${cartManager.getTotal().toFixed(2)} zł</strong>
        </td>
        <td></td>
    `;

    table.append(tableHead, ...tableRows, tableFooter);
    section.append(table);

    return section;
}
