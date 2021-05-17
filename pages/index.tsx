import Link from 'next/link';
import Layout from '../components/Layout';
import { APPLICATION_TITLE } from '../constants/app-metadata';
import Image from 'next/image';
import { Typography } from '@material-ui/core';

const IndexPage = () => (
  <Layout title={APPLICATION_TITLE}>
    <Typography variant="h3" component="h1">
      Enter to make Baby Yoda happy
    </Typography>
    <Link href="/home">
      <a>
        <Image
          src="/baby-yoda.gif"
          alt="Baby yoda waving"
          width={640}
          height={360}
        />
      </a>
    </Link>
  </Layout>
);

export default IndexPage;
