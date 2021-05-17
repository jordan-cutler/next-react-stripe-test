import { GroceryItem as GroceryItemInterface } from '../interfaces';
import GroceryItem from './GroceryItem';

type Props = {
  items: GroceryItemInterface[];
};

const GroceryList = ({ items }: Props) => (
  <>
    {items.map((item) => {
      return <GroceryItem key={item.id} item={item} />;
    })}
  </>
);

export default GroceryList;
