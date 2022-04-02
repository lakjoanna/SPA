import { Home } from '../views/Home';
import { RoomsList } from '../views/RoomsList';
import { Button } from '../common/Button';
import { TreatmentsList } from '../views/TreatmentsList';
import { Cart } from '../views/Cart';
import { Contact } from '../views/Contact';

const navItems = [
    { name: 'Strona główna', component: Home },
    { name: 'Pokoje', component: RoomsList },
    { name: 'Zabiegi', component: TreatmentsList },
    { name: 'Kontakt', component: Contact},
    { name: '🛒', component: Cart },


];


export function Nav() {
    const nav = document.createElement('nav');

    const navButtons = navItems.map(item => {
        return Button({
            text: item.name,
            classes: 'btn',
            onClick: event => {
                const siblings = event.target.parentElement.children;
                Array.from(siblings).forEach(element => {
                    element.classList.remove('btn-active');
                });
                event.target.classList.add('btn-active');

                const customEvent = new CustomEvent('navigate', {
                    detail: item.component
                });
        
                document.body.dispatchEvent(customEvent);
            }
        });
    });

    navButtons[0].classList.add('btn-active');

    nav.append(...navButtons);

    return nav;
}
