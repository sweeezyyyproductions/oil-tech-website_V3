import React from 'react';
import { Row, Col, Typography } from 'antd';
import styles from '../styles/services-container.module.css';

const { Paragraph } = Typography;

const ServicesContainer = () => (
  <div className={styles.servicesContainer}>
    <Row gutter={[16, 16]} className={styles.serviceIcons}>
      <Col span={8} className={styles.serviceIcon}>
        <img src="/images/wrench.svg" alt="Tune-Ups" className={styles.icon} />
        <Paragraph>Tune-Ups</Paragraph>
      </Col>
      <Col span={8} className={styles.serviceIcon}>
        <img src="/images/lube_black.svg" alt="Oil Changes" className={styles.icon} />
        <Paragraph>Oil Changes</Paragraph>
      </Col>
      <Col span={8} className={styles.serviceIcon}>
        <img src="/images/tire_new.svg" alt="Tire Services" className={styles.icon} />
        <Paragraph>Tire Services</Paragraph>
      </Col>
    </Row>
  </div>
);

export default ServicesContainer;
