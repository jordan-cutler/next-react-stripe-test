import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';

type Props = {
  children?: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxWidth="md">
      {/*<header>*/}
      {/*  <nav>*/}
      {/*    <Link href="/">*/}
      {/*      <a>Home</a>*/}
      {/*    </Link>{' '}*/}
      {/*    |{' '}*/}
      {/*    <Link href="/about">*/}
      {/*      <a>About</a>*/}
      {/*    </Link>{' '}*/}
      {/*    |{' '}*/}
      {/*    <Link href="/users">*/}
      {/*      <a>Users List</a>*/}
      {/*    </Link>{' '}*/}
      {/*    | <a href="/api/users">Users API</a>*/}
      {/*  </nav>*/}
      {/*</header>*/}
      {children}
      {/*<footer>*/}
      {/*  <hr />*/}
      {/*  <span>I'm here to stay (Footer)</span>*/}
      {/*</footer>*/}
    </Container>
  </div>
);

export default Layout;
