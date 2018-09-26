import React from 'react';
import { Layout } from 'antd';

import ServerStatistics from '../components/serverStatistics';
import FilterPanel from '../components/filterPanel';

import '../App.styl';

const { Header, Content, Footer } = Layout;

const Home = () => (
  <Layout>

    <Header>
      <ServerStatistics />
    </Header>

    <Content>

      <FilterPanel />
      {/* TODO: Insert filter panel */}

      {/* TODO: Insert heros displaying (with two variations: grid & row) */}

    </Content>

    <Footer>

      {/* TODO: Add footer component */}

    </Footer>

  </Layout>
);

export default Home;
