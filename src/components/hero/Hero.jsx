/* eslint-disable react/prop-types */
import React from 'react';

const Hero = ({ match }) => (
  <div>{match.params.id}</div>
);

export default Hero;
