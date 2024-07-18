import React from 'react';
import { Row, Col, Typography } from 'antd';
import Review from '../components/Review';
import styles from '../styles/reviews-container.module.css';

const { Title } = Typography;

const ReviewsContainer = () => (
  <div className={styles.reviewsContainer}>
    <Title level={3} className={styles.reviewsTitle}>What our customers are saying!</Title>
    <Row gutter={[32, 32]}>
      <Col xs={24} sm={12} md={8}>
        <Review author="Richard M. - Las Vegas" content="Best service in town. I actually visited this place couple months ago to get my tires changed.. they were able to squeeze me in even though they were about to close. Second went back to the shop today to get an oil change. Quick and easy. And they even priced match with the Groupon price on the spot. Will always come to this shop to get my bimmer fixed up. Also huge shout out to Mike Malaban for hooking me up with this shop!" rating={5} />
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Review author="Mahdis B. - San Jose, CA" content="Took a 2009 BMW six series for an oil change on Friday morning. No appointment and it was done within 10 minutes no appointment. Gray was very helpful and welcoming. We had called in advance to make sure we could bring the car in and he informed us that we could bring the car in whenever. He directed us to the waiting room that had air-conditioning as we sat and waited for the car. We were not expecting it to be done so very quickly and for such a great price." rating={5} />
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Review author="Alex P. - Las Vegas" content="Great service Graylan was able to fix my car. Fully recommended fair pricing. They were able to fix my car and get my car back on the road very professionally! Graylan is very helpful, friendly, & very honest! Will definitely do business again! Thanks guys! Highly appreciated!" rating={5} />
      </Col>
    </Row>
  </div>
);

export default ReviewsContainer;
