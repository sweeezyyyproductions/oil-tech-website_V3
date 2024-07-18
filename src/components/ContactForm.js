import React, { useRef, useState, useContext } from 'react';
import { Form, Input, Button, Card, Modal } from 'antd';
import emailjs from '@emailjs/browser';
import styles from '../styles/ContactForm.module.css';
import { LoadingContext } from './loading-context';

const ContactForm = () => {
  const formRef = useRef(null);
  const { setLoading } = useContext(LoadingContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_whfd7g4', 'template_23ajcus', formRef.current, 'Y3IoENY-j7FCmG3Xe')
      .then((result) => {
        setLoading(false);
        setModalContent({
          title: 'Success',
          message: 'Your message has been sent successfully!',
        });
        setIsModalOpen(true);
      }, (error) => {
        setLoading(false);
        setModalContent({
          title: 'Error',
          message: 'There was an error sending your message. Please try again.',
        });
        setIsModalOpen(true);
      });
  };

  const handleOk = () => {
    setIsModalOpen(false);
    formRef.current.reset();
  };

  return (
    <>
      <Card
        title={
          <>
            <div className={styles.cardTitle}>Leave us a Message!</div>
            <div className={styles.cardSubTitle}>Include car info in message</div>
          </>
        }
        bordered={false}
        className={styles.contactCard}
      >
        <form ref={formRef} onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.formItem}>
            <label htmlFor="from_name">Name</label>
            <Input name="from_name" placeholder="Name" required />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="from_email">Email</label>
            <Input type="email" name="from_email" placeholder="Email" required />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="user_phone">Phone Number</label>
            <Input type="tel" name="user_phone" placeholder="Phone Number" required />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="message">Message</label>
            <Input.TextArea name="message" rows={4} placeholder="Your Message" required />
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </form>
      </Card>
      <Modal
        title={modalContent.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        centered
        className={styles.modal}
      >
        <p>{modalContent.message}</p>
      </Modal>
    </>
  );
};

export default ContactForm;
