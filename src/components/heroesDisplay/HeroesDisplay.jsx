import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'antd';
import fetchHeroesStats from '../../actions/heroesStats';

import style from './HeroesDisplay.styl';

class HeroesDisplay extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchHeroesStats());
  }

  render() {
    const {
      error, loading, heroes, filteredHeroes,
    } = this.props;

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
        dataSource={(filteredHeroes.length && filteredHeroes) || heroes}
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
  error: PropTypes.object,
  loading: PropTypes.bool,
  heroes: PropTypes.array,
  filteredHeroes: PropTypes.array,
};


const mapStateToProps = ({ heroesStatsReducer, filtersReducer }) => ({
  filteredHeroes: filtersReducer.filteredHeroes,
  heroes: heroesStatsReducer.heroes,
  loading: heroesStatsReducer.loading,
  error: heroesStatsReducer.error,
});

export default connect(mapStateToProps)(HeroesDisplay);
