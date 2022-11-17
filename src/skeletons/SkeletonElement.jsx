import * as React from 'react';
import './Skeleton.css';

const SkeletonElement = ({ type }) => {
  const classes = `skeleton ${type}`;

  return <div className="skeleton"></div>;
};

export default SkeletonElement;
