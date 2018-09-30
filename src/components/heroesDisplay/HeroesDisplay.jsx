import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Alert, List, Row, Col, Card,
} from 'antd';
import fetchHeroesStats from '../../actions/heroesStats';

import style from './HeroesDisplay.styl';

class HeroesDisplay extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchHeroesStats());
  }

  render() {
    const {
      error, loading, heroes, currentView,
    } = this.props;

    if (error) {
      return (
        <Alert
          message={`Error: ${error.message}`}
          type="error"
          closable />
      );
    }

    const extraImage = (url, name) => (
      <figure className={style['extra-figure']}>
        <img width={256} height={114} alt={name} src={`https://cdn.steamstatic.com${url}`} />
        <figcaption>{name}</figcaption>
      </figure>
    );

    const listItem = (item) => {
      if (currentView === 'row') {
        return (
          <List.Item
            className={style['ant-list-item']}
            key={item.id}>
            <Row gutter={18}>
              <Col xs={24} md={6}>
                {extraImage(item.img, item.localized_name)}
              </Col>
              <Col xs={{ span: 0 }} md={18}>
                <p>Content</p>
              </Col>
            </Row>
          </List.Item>
        );
      }
      return (
        <List.Item
          className={style['ant-list-item']}
          key={item.id}>
          <Card title={extraImage(item.img, item.localized_name)} bordered={false}>
              Content
          </Card>
        </List.Item>
      );
    };

    const gridSettings = () => ({
      md: 4,
      lg: 4,
      xl: 6,
    });

    return heroes && (
      <List
        grid={currentView === 'grid' ? gridSettings() : null}
        itemLayout={currentView === 'row' ? 'vertical' : null}
        loading={loading}
        size="small"
        dataSource={heroes}
        renderItem={item => listItem(item)} />
    );
  }
}

HeroesDisplay.propTypes = {
  dispatch: PropTypes.func,
  error: PropTypes.object,
  loading: PropTypes.bool,
  heroes: PropTypes.array,
  currentView: PropTypes.string,
};


const mapStateToProps = ({ heroesStatsReducer, filtersReducer }) => ({
  currentView: filtersReducer.currentView,
  heroes: heroesStatsReducer.heroes,
  loading: heroesStatsReducer.loading,
  error: heroesStatsReducer.error,
});

export default connect(mapStateToProps)(HeroesDisplay);
