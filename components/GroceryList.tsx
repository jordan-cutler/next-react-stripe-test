import { GroceryItem as GroceryItemInterface } from '../interfaces';
import GroceryItem from './GroceryItem';
import { Grid } from '@material-ui/core';

type Props = {
  items: GroceryItemInterface[];
};

const GroceryList = ({ items }: Props) => (
  <Grid>
    {items.map((item) => {
      return <GroceryItem key={item.id} item={item} />;
    })}
  </Grid>
);

export default GroceryList;
