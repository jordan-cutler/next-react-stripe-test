import { Button } from '@material-ui/core';
import { useShoppingCart } from 'use-shopping-cart';

const Checkout = () => {
  const { redirectToCheckout } = useShoppingCart();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => redirectToCheckout()}
    >
      Checkout
    </Button>
  );
};

export default Checkout;
