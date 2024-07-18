import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import Layout from '../components/layout';
import ExperienceBox from '../components/experience-box';
import IconContainer from '../components/icon-container';
import ServicesContainer from '../components/services-container';
import ReviewsContainer from '../components/reviews-container';
import styles from '../styles/Home.module.css';

const { Title } = Typography;

const Home = () => (
  <Layout>
    <div
      className={styles.section1Container}
      style={{
        backgroundImage: "url('/images/ot009_blur1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Row className={styles.heroSection} justify="center" align="middle">
        <Col span={24} className={styles.titleContainer}>
          <Title level={1} className={styles.mainTitle}>Oil Tech Lube & Auto Care</Title>
          <Title level={2} className={styles.subTitle}>Las Vegas Local Mechanic</Title>
        </Col>
      </Row>
      <Row className={styles.buttonContainer} justify="center">
        <Col>
          <a href="tel:+17028579875">
            <Button type="primary" size="large" className={styles.scheduleButton}>Schedule Now</Button>
          </a>
        </Col>
      </Row>
    </div>
    <IconContainer />
    <ExperienceBox />
    <ServicesContainer />
    <hr className={styles.divider} />
    <ReviewsContainer />
  </Layout>
);

export default Home;
