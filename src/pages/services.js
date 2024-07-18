import React from 'react';
import { Typography, Row, Col } from 'antd';
import ServiceCard from '../components/ServiceCard';
import Layout from '../components/layout';
import styles from '../styles/Services.module.css';

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "Tune-Up",
    icon: "/images/car.svg",
    description: "A tune-up is a routine maintenance service for vehicles, typically involving adjustments to engine components, ignition systems, and fuel systems to optimize performance.",
    details: ["Spark Plug Service", "Air/Cabin Filter", "Fuel Filter Replacement", "System Inspection"]
  },
  {
    title: "Oil Changes",
    icon: "/images/lube_black.svg",
    description: "Consistently maintaining your oil and filter through regular changes is crucial for optimal engine performance.",
    details: ["Thorough Brake Inspection", "Fluid Top Off", "Tire Tread Check", "Free Quote"]
  },
  {
    title: "Brakes",
    icon: "/images/brakes.svg",
    description: "Car brake maintenance involves inspecting and servicing brake components to ensure optimal functionality and safety.",
    details: ["Brake Pad Replacement", "Rotor Resurfacing or Replacement", "Brake Fluid Flush", "Brake Inspection", "Hardware"]
  },
  {
    title: "Tires",
    icon: "/images/tire_new.svg",
    description: "Car tire maintenance encompasses regular checks for proper inflation, tread wear, and overall condition.",
    details: ["Regular Tire Rotation", "Tire Replacement", "Wheel Balancing", "Tire Inspection", "Wheel Alignment"]
  },
  {
    title: "Batteries",
    icon: "/images/car_battery_black.svg",
    description: "Car battery maintenance involves monitoring the battery's charge level, cleaning terminals, and ensuring secure connections.",
    details: ["Battery Testing", "Charging or Jump-Starting", "Battery Replacement", "Battery Installation Checks", "Cleaning Terminals"]
  },
];

const Services = () => (
  <Layout>
    <div className={styles.servicesContainer}>
      <Row className={styles.titleSection}>
        <Col span={24}>
          <Title>Services We Provide</Title>
          <Paragraph>Car services remain crucial for maintaining the optimal performance and longevity of your vehicle. Our comprehensive car services encompass brake maintenance, tire care, and AC services, ensuring your safety, extending the lifespan of crucial components, and enhancing overall driving comfort. Trust us for affordable, expert care that keeps your car running smoothly in today's fast-paced world, where reliability and efficiency are more essential than ever.</Paragraph>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className={styles.serviceCards}>
        {services.map(service => (
          <Col key={service.title} className={styles.serviceCard}>
            <ServiceCard title={service.title} icon={service.icon} description={service.description} details={service.details} />
          </Col>
        ))}
      </Row>
    </div>
  </Layout>
);

export default Services;
