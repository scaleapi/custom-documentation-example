import React from 'react';
import Head from 'next/head';

const SiteHead = ({ description, title }) => (
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={description} />
    <title>{title}</title>
  </Head>
);

SiteHead.defaultProps = {
  title: 'Docs',
  description: 'Docs',
};

export default SiteHead;
