import Head from 'next/head';
import React from 'react';

export interface MetaDataProps {
  title: string;
  description: string;
}

const MetaData = ({ title, description }: MetaDataProps) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
  </Head>
);

export default MetaData;
