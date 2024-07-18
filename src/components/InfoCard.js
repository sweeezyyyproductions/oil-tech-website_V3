import React from 'react';
import { Card, Typography } from 'antd';
import styles from '../styles/InfoCard.module.css';

const { Title, Paragraph } = Typography;

const InfoCard = ({ title, content, icon }) => (
  <Card bordered={false} className={styles.infoCard}>
    <div className={styles.titleContainer}>
      <img src={icon} alt="" className={styles.icon} />
      <Title level={4} className={styles.title}>{title}</Title>
    </div>
    <Paragraph className={styles.content}>{content}</Paragraph>
  </Card>
);

export default InfoCard;
