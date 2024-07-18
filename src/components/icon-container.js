import React from 'react';
import { Row, Col, Typography } from 'antd';
import styles from '../styles/icon-container.module.css';

const { Paragraph } = Typography;

const IconContainer = () => (
  <div className={styles.iconContainer}>
    <Row gutter={[16, 16]} className={styles.infoIcons} justify="center">
      <Col xs={24} sm={8} className={styles.infoItem}>
        <img src="/images/maplocatewhiteasset_blackborder.svg" alt="Location" className={styles.icon} />
        <Paragraph className={styles.infoText}>4420 Arville St Ste 32 Las Vegas, NV 89103</Paragraph>
      </Col>
      <Col xs={24} sm={8} className={styles.infoItem}>
        <img src="/images/clockwhiteasset_black.svg" alt="Hours" className={styles.icon} />
        <Paragraph className={styles.infoText}>Mon-Sat 8AM-5PM</Paragraph>
      </Col>
      <Col xs={24} sm={8} className={styles.infoItem}>
        <img src="/images/phonecall.svg" alt="Phone" className={styles.icon} />
        <Paragraph className={styles.infoText}>(702)-857-9875</Paragraph>
      </Col>
    </Row>
  </div>
);

export default IconContainer;
