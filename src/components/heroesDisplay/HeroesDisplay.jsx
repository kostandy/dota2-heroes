import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';
import fetchHeroesStats from '../../actions/heroesStats';

import style from './HeroesDisplay.styl';

class HeroesDisplay extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchHeroesStats());
  }

  render() {
    const { error, loading, heroes } = this.props;

    if (error) {
      return (
        <div>
          Error:
          &nbsp;
          {error.message}
        </div>
      );
    }

    const extraImage = url => (
      <img width={200} height={112} alt="Extra" src={`https://cdn.steamstatic.com${url}`} />
    );

    const rowDisplay = heroes && (
      <List
        itemLayout="vertical"
        loading={loading}
        size="small"
        dataSource={heroes}
        renderItem={item => (
          <List.Item
            className={style['ant-list-item']}
            key={item.id}
            extra={extraImage(item.img)}>
            <List.Item.Meta title={<a href="#">{item.localized_name}</a>} />
          </List.Item>
        )} />
    );

    return (
      <div>
        { rowDisplay }
      </div>
    );
  }
}

HeroesDisplay.propTypes = {
  dispatch: PropTypes.func,
  heroes: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool,
};


const mapStateToProps = ({ heroesStatsReducer }) => ({
  heroes: heroesStatsReducer.heroes,
  loading: heroesStatsReducer.loading,
  error: heroesStatsReducer.error,
});

export default connect(mapStateToProps)(HeroesDisplay);
