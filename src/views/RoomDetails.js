import { Button } from '../common/Button';
import { RoomsList } from './RoomsList';

const backButton = Button({
    text: 'Cofnij',
    classes: 'btn',
    onClick: () => {
        const customEvent = new CustomEvent('navigate', {
            detail: RoomsList
        });
        
        document.body.dispatchEvent(customEvent);
    }
});

export function RoomDetails(id) {
    const section = document.createElement('section');

    section.innerHTML = `
            <header>Loading...</header>
        `;

    fetch(`http://localhost:3000/rooms/${id}`)
        .then(response => response.json())
        .then(room => {
            section.querySelector('header').remove();
            
            const article = document.createElement('article');
            article.innerHTML = `
                <h3 class="room_header">${room.name}</h3>
                <hr>
                <p class="room_description">${room.description}</p>
                <hr>
                <p class="room_price">
                    <strong>${room.price.toFixed(2)} PLN</strong>
                </p>
            `;

            section.append(article, backButton);
            section.append(img);
        });

    return section;
}
