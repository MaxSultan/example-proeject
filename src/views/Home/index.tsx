import React from 'react';

export interface HomeProps {
  title: string;
}

const Home = ({ title }: HomeProps) => (
  <h1 className="my-8 max-w-2xl mx-auto">{title}</h1>
);

export default Home;

export const getStaticProps = () => ({
  props: {
    title: 'Hello world',
    layout: {
      metadata: {
        title: 'Example Application',
      },
    },
  },
});
