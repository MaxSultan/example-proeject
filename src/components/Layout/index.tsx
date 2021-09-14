import MetaData, { MetaDataProps } from '@components/MetaData';
import React from 'react';

export interface LayoutProps {
  metadata: MetaDataProps;
  children: React.ReactNode;
}

const Layout: React.FC = ({ metadata, children }: LayoutProps) => (
  <>
    <MetaData {...metadata} />
    <header></header>
    <main>{children}</main>
    <footer></footer>
  </>
);

export default Layout;
