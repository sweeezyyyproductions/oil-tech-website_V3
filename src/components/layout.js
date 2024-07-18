import React from 'react';
import { Layout as AntLayout } from 'antd';
import LoadingSpinner from './loading-spinner'; // Import the loading spinner component
import Header from './Header';
import Footer from './Footer';

const { Content } = AntLayout;

const Layout = ({ children }) => (
  <AntLayout>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
    <LoadingSpinner /> {/* Add the loading spinner */}
  </AntLayout>
);

export default Layout;
