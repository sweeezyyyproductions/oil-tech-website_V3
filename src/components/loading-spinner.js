import React, { useContext } from 'react';
import { Spin } from 'antd';
import styles from '../styles/loading-spinner.module.css';
import { LoadingContext } from './loading-context';

const LoadingSpinner = () => {
  const { isLoading } = useContext(LoadingContext);

  if (!isLoading) {
    return null;
  }

  return (
    <div className={styles.spinnerContainer}>
      <Spin size="large" />
    </div>
  );
};

export default LoadingSpinner;
