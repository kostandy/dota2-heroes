import React from 'react';
import { Col, Row, Switch } from 'antd';

import style from './FilterPanel.styl';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

const FilterPanel = () => (
  <Row
    type="flex"
    justify="space-between"
    align="middle"
    className={style.row}>

    <Col span={20}>
      Here will be filters
    </Col>

    <Col span={4} style={{ textAlign: 'center' }}>
      Display as:
      <Switch
        className={style.switch}
        defaultChecked
        onChange={onChange}
        checkedChildren="Row"
        unCheckedChildren="Grid" />
    </Col>

  </Row>
);

export default FilterPanel;
