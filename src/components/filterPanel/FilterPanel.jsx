import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Col, Row, Switch, Select,
} from 'antd';
import PropTypes from 'prop-types';

import style from './FilterPanel.styl';

const { Option } = Select;

class FilterPanel extends Component {
  render() {
    const { error, loading, heroes } = this.props;

    const icons = heroes && heroes
    // eslint-disable-next-line global-require,import/no-dynamic-require
      .map(hero => require(`../../static/icons/${hero.localized_name}.png`));

    const onChangeHeroes = (value) => {
      console.log(`selected hero: ${value}`);
    };

    const onChangeView = checked => checked;

    const heroSelect = () => (
      <Select
        className={style['ant-select']}
        mode="tags"
        style={{ width: '100%' }}
        onChange={onChangeHeroes}
        placeholder="Pick heroes for filter"
        tokenSeparators={[',']}>

        {error && [(<Option key={0} disabled>{error.message}</Option>)]}

        {loading && (<Option key={0} disabled>Loading...</Option>)}

        {!error && !loading && heroes && heroes.length && heroes.map((hero, index) => (
          <Option key={hero.localized_name}>
            <img
              className={style.avatar}
              src={icons[index]}
              alt={hero.localized_name}
              width={18}
              height={18} />
            <p className={style.label}>{hero.localized_name}</p>
          </Option>
        ))}
      </Select>
    );

    const changeView = () => (
      <div>
        Display as:
        <Switch
          className={style.switch}
          defaultChecked
          onChange={onChangeView}
          checkedChildren="row"
          unCheckedChildren="grid" />
      </div>
    );

    return (
      <div>
        <Row
          type="flex"
          justify="space-between"
          align="middle"
          className={style.row}>

          <Col span={15}>
            {heroSelect()}
          </Col>

          <Col span={5} style={{ textAlign: 'center' }}>
            {changeView()}
          </Col>

        </Row>
      </div>
    );
  }
}

FilterPanel.propTypes = {
  heroes: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool,
};


const mapStateToProps = ({ heroesStatsReducer }) => ({
  heroes: heroesStatsReducer.heroes,
  loading: heroesStatsReducer.loading,
  error: heroesStatsReducer.error,
});


export default connect(mapStateToProps)(FilterPanel);
