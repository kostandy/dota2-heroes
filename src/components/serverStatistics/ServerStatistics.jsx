import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Alert, Col, Row, Skeleton,
} from 'antd';
import fetchServerStatistics from '../../actions/serverStatistics';

import style from './ServerStatistics.styl';

class ServerStatistics extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchServerStatistics());
  }

  render() {
    const { error, loading, statistic } = this.props;

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

    const userPlayers = (
      <Col className={style.col} xs={24} sm={24} md={8}>
        <Skeleton loading={loading} paragraph={{ rows: 1 }} active>
          <h2>{statistic && statistic.user_players}</h2>
          <h3>User players</h3>
        </Skeleton>
      </Col>
    );

    const matchesLastDay = (
      <Col className={style.col} xs={24} sm={24} md={8}>
        <Skeleton loading={loading} paragraph={{ rows: 1 }} active>
          <h2>{statistic && statistic.matches_last_day}</h2>
          <h3>Matches for the last day</h3>
        </Skeleton>
      </Col>
    );

    const matchesLastHour = (
      <Col className={style.col} xs={24} sm={24} md={8}>
        <Skeleton loading={loading} paragraph={{ rows: 1 }} active>
          <h2>{statistic && statistic.matches_last_hour}</h2>
          <h3>Matches for the last hour</h3>
        </Skeleton>
      </Col>
    );

    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        className={style.row}>

        {userPlayers}

        {matchesLastDay}

        {matchesLastHour}

      </Row>
    );
  }
}

ServerStatistics.propTypes = {
  dispatch: PropTypes.func,
  error: PropTypes.object,
  loading: PropTypes.bool,
  statistic: PropTypes.object,
};

const mapStateToProps = ({ serverStatisticReducer }) => ({
  statistic: serverStatisticReducer.statistic,
  loading: serverStatisticReducer.loading,
  error: serverStatisticReducer.error,
});

export default connect(mapStateToProps)(ServerStatistics);
