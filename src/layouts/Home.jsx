import React from 'react';
import { Layout } from 'antd';

import ServerStatistics from '../components/serverStatistics';
import FilterPanel from '../components/filterPanel';
import HeroesDisplay from '../components/heroesDisplay/HeroesDisplay';

import '../App.styl';

const { Header, Content, Footer } = Layout;

const Home = () => (
  <Layout>

    <Header>
      <ServerStatistics />
    </Header>

    <Content>

      {/* TODO: It's necessary to finalize filter panel */}
      <FilterPanel />

      {/* TODO: Insert heros displaying (with two variations: grid & row) */}
      <HeroesDisplay />

    </Content>

    <Footer>

      {/* TODO: Add footer component */}

    </Footer>

  </Layout>
);

export default Home;
