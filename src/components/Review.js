import React, { useState } from 'react';
import { Card, Avatar, Typography, Rate, Button, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from '../styles/Review.module.css';

const { Paragraph } = Typography;

const Review = ({ author, content, rating }) => {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 100;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const getContent = () => {
    if (expanded) {
      return content;
    }
    return content.length > MAX_LENGTH ? `${content.substring(0, MAX_LENGTH)}...` : content;
  };

  return (
    <Card className={styles.testimonialBox}>
      <Row gutter={16} className={styles.reviewHeader}>
        <Col>
          <Avatar icon={<UserOutlined />} />
        </Col>
        <Col>
          <div className={styles.author}>{author}</div>
          <Rate disabled defaultValue={rating} className={styles.rating} />
        </Col>
      </Row>
      <Paragraph className={styles.content}>{getContent()}</Paragraph>
      {content.length > MAX_LENGTH && (
        <Button type="link" onClick={toggleExpanded}>
          {expanded ? 'Read Less' : 'Read More'}
        </Button>
      )}
    </Card>
  );
};

export default Review;
