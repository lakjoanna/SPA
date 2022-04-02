import { Button } from './Button';
import { cartManager } from '../cart/cart-manager';

export function AddToCartButton(item) {
    return Button({
        text: 'Dodaj do koszyka',
        classes: 'btn btn-light',
        onClick: () => {
            cartManager.addItem(item);
        }
    });
}
