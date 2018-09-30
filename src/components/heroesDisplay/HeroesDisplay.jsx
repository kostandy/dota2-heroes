/* eslint-disable global-require,import/no-dynamic-require */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Alert, List, Row, Col, Card, Tooltip,
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
          message="Error"
          description={error.message}
          showIcon
          type="error"
          closable />
      );
    }

    const extraImages = heroes && heroes
      .map(hero => require(`../../static/extra/${hero.localized_name}.png`));

    // eslint-disable-next-line no-nested-ternary
    const getFullAttrName = attr => (attr === 'str' ? 'strength'
      : attr === 'agi' ? 'agility' : 'intelligence');

    const extraImage = ({ localized_name: name, primary_attr: attr }, index) => (
      <figure className={style['extra-figure']}>
        <img width={256} height={114} alt={name} src={extraImages[index]} />
        <Tooltip placement="leftTop" title={`Primary: ${getFullAttrName(attr)}`}>
          <span className={['attr', attr, 'primary-attr'].join(' ')} />
        </Tooltip>
        <figcaption>{name}</figcaption>
      </figure>
    );

    const listItem = (item, index) => {
      if (currentView === 'row') {
        return (
          <List.Item
            className={style['ant-list-item']}
            key={item.id}>
            <Row gutter={18}>
              <Col xs={24} md={6}>
                {extraImage(item, index)}
              </Col>
              <Col xs={{ span: 0 }} md={4}>
                <p>{item.attack_type}</p>
                <div>
                  <span className={['attr', 'str', item.primary_attr === 'str' ? 'primary-attr' : null].join(' ')} />
                  &nbsp;
                  {item.base_str}
                  &nbsp;
                  <small>
                    +
                    {item.str_gain}
                  </small>
                </div>
                <div>
                  <span className={['attr', 'agi', item.primary_attr === 'agi' ? 'primary-attr' : null].join(' ')} />
                  &nbsp;
                  {item.base_agi}
                  &nbsp;
                  <small>
                    +
                    {item.agi_gain}
                  </small>
                </div>
                <div>
                  <span className={['attr', 'int', item.primary_attr === 'int' ? 'primary-attr' : null].join(' ')} />
                  &nbsp;
                  {item.base_agi}
                  &nbsp;
                  <small>
                    +
                    {item.agi_gain}
                  </small>
                </div>
              </Col>
            </Row>
          </List.Item>
        );
      }
      return (
        <List.Item
          className={style['ant-list-item']}
          key={item.id}>
          <Card title={extraImage(item, index)} bordered={false}>
            {item.attack_type}
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
        renderItem={(item, index) => listItem(item, index)} />
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
