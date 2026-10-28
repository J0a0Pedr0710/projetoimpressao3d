import { useNavigate } from 'react-router-dom';

import { useCart } from '@/contexts';
import { Icon } from '@/features/shared/atoms/icons';

import { Badge, CartContainer } from './style';

export const CartMenu = () => {
  const navigate = useNavigate();
  const { setSelectedCart, cart, updateCart } = useCart();

  const cartLength = cart.length > 10 ? '10+' : cart.length.toString();
  return (
    <button
      data-testid="cart-button"
      onClick={() => {
        setSelectedCart([]);
        navigate('/cart');
        updateCart();
      }}
    >
      <CartContainer>
        <Icon icon="cart" color="primary600" />
        {cart.length > 0 && <Badge>{cartLength}</Badge>}
      </CartContainer>
    </button>
  );
};
