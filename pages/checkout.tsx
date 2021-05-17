import Link from 'next/link';
import Layout from '../components/Layout';
import { TextField, Typography } from '@material-ui/core';
import { APPLICATION_TITLE } from '../constants/app-metadata';
import { GetServerSideProps, GetStaticProps } from 'next';
import { GroceryItem } from '../interfaces';
import { sampleGroceryData } from '../utils/sample-data';
import CheckoutButton from '../components/CheckoutButton';
import { connectToDatabase } from '../utils/mongodb';
import { useShoppingCart } from 'use-shopping-cart';
import { Form, Formik } from 'formik';

const Checkout = () => {
  const { cartDetails } = useShoppingCart();

  return (
    <Layout title={APPLICATION_TITLE}>
      <Typography variant="h3" component="h1">
        Provide info
      </Typography>

      <Formik
        initialValues={{ city: '', address: '', zip: '', state: '', email: '' }}
        onSubmit={() => {}}
      >
        {({}) => {
          return (
            <Form>
              <Typography variant="h5">Shipping address</Typography>
              <TextField label="City" id="city" />
              <TextField label="Address Line 1" id="address" />
              <TextField label="Zip code" id="zip" />
              <TextField label="State" id="state" />
              <TextField label="Email" id="email" />
            </Form>
          );
        }}
      </Formik>
      <CheckoutButton />
      <p>
        <Link href="/home">
          <a>Back</a>
        </Link>
      </p>
    </Layout>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const cartItems: GroceryItem[] = sampleGroceryData;
//   const database = await connectToDatabase();
//
//   return { props: { items } };
// };

export default Checkout;
