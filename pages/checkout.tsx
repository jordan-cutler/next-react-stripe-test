import Link from 'next/link';
import Layout from '../components/Layout';
import { TextField, Typography } from '@material-ui/core';
import { APPLICATION_TITLE } from '../constants/app-metadata';
import CheckoutButton from '../components/CheckoutButton';
import { Form, Formik } from 'formik';

const Checkout = () => {
  const onSubmit = () => {
    return null;
  };

  return (
    <Layout title={APPLICATION_TITLE}>
      <Typography variant="h3" component="h1">
        Provide info
      </Typography>

      <Formik
        initialValues={{ city: '', address: '', zip: '', state: '', email: '' }}
        onSubmit={onSubmit}
      >
        <Form>
          <Typography variant="h5">Shipping address</Typography>
          <TextField label="City" id="city" />
          <TextField label="Address Line 1" id="address" />
          <TextField label="Zip code" id="zip" />
          <TextField label="State" id="state" />
          <TextField label="Email" id="email" />
        </Form>
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

export default Checkout;
