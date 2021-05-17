import Link from 'next/link';
import Layout from '../components/Layout';
import { Typography } from '@material-ui/core';
import { APPLICATION_TITLE } from '../constants/app-metadata';
import GroceryList from '../components/GroceryList';
import { GetStaticProps } from 'next';
import { GroceryItem } from '../interfaces';
import { sampleGroceryData } from '../utils/sample-data';
import Checkout from '../components/Checkout';

export interface Props {
  items: GroceryItem[];
}

const HomePage: React.FC<Props> = ({ items }) => (
  <Layout title={APPLICATION_TITLE}>
    <Typography variant="h3" component="h1">
      What would you like to buy?
    </Typography>
    <GroceryList items={items} />
    <Checkout />
    <p>
      <Link href="/">
        <a>Back</a>
      </Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: GroceryItem[] = sampleGroceryData;
  return { props: { items } };
};

export default HomePage;
