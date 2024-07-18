import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import styles from '../styles/Header.module.css';

const { Header } = Layout;

const menuItems = [
  { label: <Link to="/" className={styles.customLink}>Home</Link>, key: '/' },
  { label: <Link to="/services" className={styles.customLink}>Services</Link>, key: '/services' },
  { label: <Link to="/about" className={styles.customLink}>About Us</Link>, key: '/about' },
  { label: <Link to="/contact" className={styles.customLink}>Contact</Link>, key: '/contact' },
];

const HeaderComponent = () => {
  const location = useLocation();
  const selectedKey = location.pathname;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header className={styles.header}>
      <img src="/images/ot1.jpg" alt="Oil Tech Logo" className={styles.logo} />
      <div className={styles.mobileMenuButton}>
        <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
      </div>
      <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]} items={menuItems} className={styles.menu} />
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
        className={styles.drawer}
        
      >
        <Menu theme="light" mode="vertical" selectedKeys={[selectedKey]} items={menuItems} onClick={onClose} />
      </Drawer>
    </Header>
  );
};

export default HeaderComponent;
