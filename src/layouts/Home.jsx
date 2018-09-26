import React from 'react';
import { Layout } from 'antd';
import ServerStatistics from '../components/serverStatistics';

import style from '../App.styl';

const { Header, Content } = Layout;

const Home = () => (
  <Layout className={style['ant-layout']}>

    <Header className={style['ant-layout-header']}>
      <ServerStatistics />
    </Header>

    <Content>
      Hello
    </Content>

  </Layout>
);

export default Home;
