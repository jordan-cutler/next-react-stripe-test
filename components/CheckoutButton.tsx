import { Button } from '@material-ui/core';
import { useShoppingCart } from 'use-shopping-cart';

const CheckoutButton = () => {
  const { redirectToCheckout } = useShoppingCart();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => redirectToCheckout()}
    >
      Pay now
    </Button>
  );
};

export default CheckoutButton;
