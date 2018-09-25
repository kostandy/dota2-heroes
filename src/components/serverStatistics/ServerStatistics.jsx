import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import fetchServerStatistics from '../../actions';

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

    return (
      <Row type="flex" justify="center" align="top">
        <Col span={8}>
          <h1>{statistic && statistic.user_players}</h1>
        </Col>
        <Col span={8}>
          <h1>{statistic && statistic.matches_last_day}</h1>
        </Col>
        <Col span={8}>
          <h1>{statistic && statistic.matches_last_hour}</h1>
        </Col>
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

const mapStateToProps = state => ({
  statistic: state.statistic,
  loading: state.statistic.loading,
  error: state.statistic.error,
});

export default connect(mapStateToProps)(ServerStatistics);
