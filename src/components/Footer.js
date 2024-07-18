import React from 'react';
import { Layout, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';

const { Footer } = Layout;

const FooterComponent = () => (
  <Footer className={styles.footer}>
    <div className={styles.container}>
      <Row className={styles.row}>
        <Col className={styles.footerCol} xs={24} sm={12} md={6}>
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:702-857-9875">702-857-9875</a></li>
            <li>oiltechlasvegas2024@gmail.com</li>
          </ul>
        </Col>
        <Col className={styles.footerCol} xs={24} sm={12} md={6}>
          <h4>Hours & Address</h4>
          <ul>
            <li><a href="#">Mon-Sat 8:00am-5:00pm</a></li>
            <li><a href="#">4420 Arville Street Suite #32</a></li>
          </ul>
        </Col>
        <Col className={styles.footerCol} xs={24} sm={12} md={6}>
          <h4>Services</h4>
          <ul>
            <li><a href="#">Oil Change</a></li>
            <li><a href="#">Brakes</a></li>
            <li><a href="#">Tune-up</a></li>
          </ul>
        </Col>
        <Col className={styles.footerCol} xs={24} sm={12} md={6}>
          <h4>Follow Us</h4>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/Oiltechocs/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/oiltechlasvegas/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.yelp.com/biz/oil-tech-lube-and-auto-care-las-vegas" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYelp} />
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.3339437010604!2d-115.20024298478927!3d36.1097212139602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c69aff130513%3A0x4cbcd701bf40458e!2s4420%20S%20Arville%20St%20SUITE%2032%2C%20Las%20Vegas%2C%20NV%2089103!5e0!3m2!1sen!2sus!4v1676444439544!5m2!1sen!2sus" 
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Oil Tech Lube & Auto Care Location"
          ></iframe>
        </Col>
      </Row>
      <div className={styles.copyright}>
        Oil Tech Lube & Auto Care. All rights reserved.
      </div>
    </div>
  </Footer>
);

export default FooterComponent;