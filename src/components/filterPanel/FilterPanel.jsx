/* eslint-disable global-require,import/no-dynamic-require,react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Switch } from 'antd';
import PropTypes from 'prop-types';
import { changeView as changeViewAction } from '../../actions/filters';

import style from './FilterPanel.styl';

class FilterPanel extends Component {
  render() {
    const { dispatch } = this.props;

    // const icons = heroes && heroes
    //   .map(hero => require(`../../static/icons/${hero.localized_name}.png`));

    const onChangeView = view => dispatch(changeViewAction(view ? 'row' : 'grid'));

    const changeView = () => (
      <div>
        Display as:
        <Switch
          className={style.switch}
          defaultChecked
          onChange={onChangeView}
          checkedChildren="Row"
          unCheckedChildren="Grid" />
      </div>
    );

    return (
      <Row
        type="flex"
        justify="space-between"
        align="middle"
        className={style.row}>

        <Col xs={{ span: 0 }} md={24}>
          {changeView()}
        </Col>

        <Col xs={24} md={{ span: 0 }}>
          You can change view on the largest screen
        </Col>

      </Row>
    );
  }
}

FilterPanel.propTypes = {
  dispatch: PropTypes.func,
};


const mapStateToProps = ({ heroesStatsReducer }) => ({
  heroes: heroesStatsReducer.heroes,
  loading: heroesStatsReducer.loading,
  error: heroesStatsReducer.error,
});


export default connect(mapStateToProps)(FilterPanel);
