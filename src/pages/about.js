import React from 'react';
import { Typography, Row, Col } from 'antd';
import Layout from '../components/layout';
import styles from '../styles/About.module.css';

const { Title, Paragraph } = Typography;

const About = () => (
  <Layout>
    <div className={styles.aboutContainer}>
      <Row gutter={[16, 16]} className={styles.aboutContent} justify="center">
        <Col xs={24} lg={12}>
          <img src="/images/oil_change.jpg" alt="Oil Change" className={styles.aboutImage} />
        </Col>
        <Col xs={24} lg={12}>
          <div className={styles.aboutList}>
            <Title level={1} className={styles.aboutTitle}>About Us</Title>
            <Row>
              <Col span={24}>
                <Paragraph className={styles.aboutText}>Welcome to Oil Tech Lube and Auto Care, your premier locally owned mechanic shop in the heart of Las Vegas. We pride ourselves on providing outstanding customer service that exceeds your expectations.</Paragraph>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Paragraph className={styles.aboutText}>As a community-oriented business, we genuinely care about our customers and their vehicles. Our team of experienced technicians is dedicated to delivering high-quality repairs and maintenance services, ensuring that your vehicle stays on the road for longer stretches without needing frequent visits to our shop.</Paragraph>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Paragraph className={styles.aboutText}>We believe in the value of your time and money, which is why we strive to get the job done right the first time. At Oil Tech, we combine our passion for auto care with our commitment to exceptional craftsmanship, resulting in top-notch repairs and services tailored to your specific needs. Trust us to provide you with reliable solutions that keep your vehicle running smoothly, so you can focus on what matters most in your busy life.</Paragraph>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Paragraph className={styles.aboutText}>At Oil Tech Lube and Auto Care, we go beyond standard auto services by fostering strong relationships with our clients. We take the time to understand your vehicle's history and your driving habits, offering personalized advice and preventive maintenance tips. Our state-of-the-art facility is equipped with the latest technology, ensuring that we can handle any repair or maintenance challenge with precision and efficiency. Join our family of satisfied customers and discover why Oil Tech Lube and Auto Care is the trusted choice for all your automotive needs in Las Vegas.</Paragraph>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className={styles.iconsContainer}>
        <Col span={8} className={styles.icon}>
          <img src="/images/id_card.svg" alt="ID Card" />
          <Paragraph>Certified Mechanics</Paragraph>
        </Col>
        <Col span={8} className={styles.icon}>
          <img src="/images/local_new.svg" alt="Locally Owned" />
          <Paragraph>Locally Owned</Paragraph>
        </Col>
        <Col span={8} className={styles.icon}>
          <img src="/images/money.svg" alt="Affordable Pricing" />
          <Paragraph>Affordable Pricing</Paragraph>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default About;
