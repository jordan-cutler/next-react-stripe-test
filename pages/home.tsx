import Link from 'next/link';
import Layout from '../components/Layout';
import { Button, Typography } from '@material-ui/core';
import { APPLICATION_TITLE } from '../constants/app-metadata';
import GroceryList from '../components/GroceryList';
import { GetStaticProps } from 'next';
import { GroceryItem } from '../interfaces';
import { sampleGroceryData } from '../utils/sample-data';

export interface Props {
  items: GroceryItem[];
}

const HomePage: React.FC<Props> = ({ items }) => {
  return (
    <Layout title={APPLICATION_TITLE}>
      <Typography variant="h3" component="h1">
        What would you like to buy?
      </Typography>
      <GroceryList items={items} />
      <Link href="/checkout">
        <a>
          <Button variant="contained" color="primary">
            Checkout
          </Button>
        </a>
      </Link>
      <p>
        <Link href="/">
          <a>Back</a>
        </Link>
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const items: GroceryItem[] = sampleGroceryData;
  return { props: { items } };
};

export default HomePage;
