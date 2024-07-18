import React, { useState } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import styles from '../styles/experience-box.module.css';

const { Title, Paragraph } = Typography;

const ExperienceBox = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={`${styles.experienceBox} ${showMore ? styles.showMore : ''}`}>
      <Row>
        <Col span={24}>
          <Title>Experience the Oil Tech difference.</Title>
        </Col>
      </Row>
      {showMore && (
        <div className={styles.fullContent}>
          <Paragraph>Welcome to Oil Tech Lube and Auto, your one-stop-shop for all your vehicle maintenance and repair needs. We are a dedicated team of experienced mechanics and technicians who take pride in providing high-quality services at the best prices in Las Vegas.</Paragraph>
          <Paragraph>At Oil Tech Lube and Auto, we understand the importance of keeping your vehicle in top-notch condition, and we are committed to delivering efficient and effective solutions to ensure your safety and satisfaction on the road. Whether you need an oil change, brake repair, engine diagnostics, or any other type of auto repair service, we have you covered.</Paragraph>
          <Paragraph>We take pride in our exceptional customer service and strive to build long-lasting relationships with our clients. Our friendly and knowledgeable team is always ready to answer any questions you may have and provide you with the guidance you need to make informed decisions about your vehicle's maintenance and repair.</Paragraph>
          <div className={styles.readLessButtonContainer}>
            <Button type="link" onClick={() => setShowMore(false)} className={styles.readMoreButton}>Read Less</Button>
          </div>
        </div>
      )}
      {!showMore && (
        <div className={styles.readMoreButtonContainer}>
          <Button type="link" onClick={() => setShowMore(true)} className={styles.readMoreButton}>Read More</Button>
        </div>
      )}
    </div>
  );
};

export default ExperienceBox;
