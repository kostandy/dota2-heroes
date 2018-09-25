import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import fetchServerStatistics from '../../actions';

import style from './ServerStatistics.styl';

class ServerStatistics extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchServerStatistics());
  }

  render() {
    const { error, loading, statistic } = this.props;

    if (error) {
      return (
        <div>
          Error!
          <pre>{error.message}</pre>
        </div>
      );
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (statistic) {
      return (
        <Row type="flex" justify="center" align="middle" style={{ textAlign: 'center' }}>
          <Col className={style.element} span={8}>
            <h2>{statistic.user_players}</h2>
            <h3>User players</h3>
          </Col>
          <Col className={style.element} span={8}>
            <h2>{statistic.matches_last_day}</h2>
            <h3>Matches for the last day</h3>
          </Col>
          <Col className={style.element} span={8}>
            <h2>{statistic.matches_last_hour}</h2>
            <h3>Matches in the last hour</h3>
          </Col>
        </Row>
      );
    }

    return null;
  }
}

ServerStatistics.propTypes = {
  dispatch: PropTypes.func,
  error: PropTypes.object,
  loading: PropTypes.bool,
  statistic: PropTypes.object,
};

const mapStateToProps = state => ({
  statistic: state.statistic,
  loading: state.statistic.loading,
  error: state.statistic.error,
});

export default connect(mapStateToProps)(ServerStatistics);
