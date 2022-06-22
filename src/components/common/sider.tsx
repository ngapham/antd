import React from 'react';
// import './App.css';
import 'antd/dist/antd.css';
import styles from './index.less';
import {
  WalletOutlined,
  HomeOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import logo from '../../assets/images/logo.png';

import { Layout, Menu, Image, Button } from 'antd';
import { useState } from 'react';
import { history, Redirect } from 'umi';
export type SiderTheme = 'light' | 'dark';
const { Header, Sider, Content, Footer } = Layout;

const SiderApp = () => {
  // const [collapsed, setCollapsed] = useState(false);

  function onMenuItemClicked(data: any) {
    let key: string = data.key;
    switch (key) {
      case '1':
        console.log('Chuyen sang home');
        history.push('/home');
        break;
      case '2':
        console.log('Chuyen sang marketplace');
        break;
      case '3':
        console.log('Chuyen sang lunacian express');
        break;
    }
  }
  return (
    <div className="Menu-left">
      <div className={styles.logo}>
        <img src={logo}></img>
      </div>

      <div className={styles.menuhome}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={(data) => onMenuItemClicked(data)}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <ShoppingOutlined />,
              label: 'Marketplace',
            },
            {
              key: '3',
              icon: <WalletOutlined />,
              label: 'Lunacian express',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SiderApp;
