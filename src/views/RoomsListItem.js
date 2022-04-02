import { Button } from '../common/Button';
import { RoomDetails } from './RoomDetails';
import { AddToCartButton } from '../common/AddToCartButton';

export function RoomsListItem(room) {
    const li = document.createElement('li');
    li.style.margin = '2em 1em';
    li.style.backgroundColor = 'rgba(200, 200, 200, 0.193)';
    li.style.padding = '2em 1em';
    li.style.listStyleType ='none';


    li.innerHTML = `
            <h4>${room.name}</h4>
            <p>
                <strong>${room.price.toFixed(2)} PLN</strong>
            </p>
        `;

    li.append(
        Button({
            text: 'Więcej',
            classes: 'btn btn-light',
            onClick: () => {
                const customEvent = new CustomEvent('navigate', {
                    detail: () => RoomDetails(room.id)
                });
                
                document.body.dispatchEvent(customEvent);
            }
        })
    );

    li.append(AddToCartButton(room));

    return li;
}
