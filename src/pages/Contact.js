import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import Layout from '../components/layout';
import ContactForm from '../components/ContactForm';
import InfoCard from '../components/InfoCard';
import styles from '../styles/Contact.module.css';

const { Title, Paragraph } = Typography;

const Contact = () => (
  <Layout>
    <div className={styles.contactContainer}>
      <Row justify="center">
        <Col span={24}>
          <Title level={1} className={styles.mainTitle}>Contact Us</Title>
          <Paragraph className={styles.subTitle}>We'd love to hear from you. Reach out to us with any questions or feedback.</Paragraph>
          <Divider />
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]} className={styles.contactSection}>
        <Col xs={24} md={11}>
          <ContactForm />
        </Col>
        <Col xs={0} md={2} className={styles.dividerContainer}>
          <Divider type="vertical" className={styles.verticalDivider} />
        </Col>
        <Col xs={24} md={11}>
          <InfoCard
            title="Our Address"
            content="4420 Arville St Ste 32 Las Vegas, NV 89103"
            icon="/images/maplocatewhiteasset_blackborder.svg"
          />
          <InfoCard
            title="Working Hours"
            content="Mon-Sat: 8AM-5PM"
            icon="/images/clockwhiteasset_black.svg"
          />
          <InfoCard
            title="Phone Number"
            content="(702)-857-9875"
            icon="/images/phonecall.svg"
          />
        </Col>
      </Row>
    </div>
  </Layout>
);

export default Contact;
