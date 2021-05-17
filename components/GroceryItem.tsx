import { GroceryItem as GroceryItemInterface } from '../interfaces';
import { Button, Paper, Typography } from '@material-ui/core';
import { useShoppingCart } from 'use-shopping-cart';
import { formatItemPrice } from '../utils/format-item-price';

type Props = {
  item: GroceryItemInterface;
};

const GroceryItem = ({ item }: Props) => {
  const { addItem } = useShoppingCart();

  return (
    <Paper elevation={5}>
      <Typography variant="h3">{item.name}</Typography>
      <Typography variant="h5">{item.description}</Typography>
      <img src={item.image} alt={item.name} />
      <span>Price: {formatItemPrice(item)}</span>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => addItem(item)}
      >
        Add item to cart
      </Button>
    </Paper>
  );
};

export default GroceryItem;
