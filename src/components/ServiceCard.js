import React from 'react';
import { Card, Typography, List } from 'antd';
import styles from '../styles/ServiceCard.module.css';

const { Title, Paragraph } = Typography;

const ServiceCard = ({ title, icon, description, details }) => (
  <Card className={styles.serviceCard}>
    <div className={styles.titleContainer}>
      <img src={icon} alt={`${title} icon`} className={styles.icon} />
      <Title level={3} className={styles.title}>{title}</Title>
    </div>
    <Paragraph>{description}</Paragraph>
    <List
      size="small"
      dataSource={details}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  </Card>
);

export default ServiceCard;
