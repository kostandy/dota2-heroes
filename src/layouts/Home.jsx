import React from 'react';
import { Layout } from 'antd';
import ServerStatistics from '../components/serverStatistics';

const { Header } = Layout;

const Home = () => (
  <Layout>
    <Header>
      <ServerStatistics />
    </Header>
  </Layout>
);

export default Home;
