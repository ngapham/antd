import React from 'react';

import 'antd/dist/antd.css';
import './index.css';
import styles from './index.less';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import SiderApp from '../components/common/sider';
import AppHome from '../view/home';
import { Layout } from 'antd';
import { useState } from 'react';
import { history, Redirect } from 'umi';
import Icon, {
  CustomIconComponentProps,
} from '@ant-design/icons/lib/components/Icon';

export type SiderTheme = 'light' | 'dark';
const { Header, Sider, Content } = Layout;

const HeartSvg = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.5114 17.4L20.2114 8.7C20.0114 7.7 19.2114 7 18.2114 7H17.1114C17.1114 4.2 14.9114 2 12.1114 2C9.31145 2 7.11144 4.2 7.11144 7H5.91144C4.91144 7 4.11144 7.7 3.91144 8.7L2.51144 17.4C2.31144 18.6 2.71144 19.7 3.41144 20.6C4.11144 21.5 5.31144 22 6.51144 22H17.5114C18.7114 22 19.8114 21.5 20.5114 20.6C21.2114 19.7 21.6114 18.5 21.5114 17.4ZM12.0114 4C13.7114 4 15.0114 5.3 15.0114 7H9.01144C9.01144 5.3 10.3114 4 12.0114 4ZM9.01144 13C8.41144 13 8.01144 12.6 8.01144 12C8.01144 11.4 8.41144 11 9.01144 11C9.61144 11 10.0114 11.4 10.0114 12C10.0114 12.6 9.61144 13 9.01144 13ZM15.0114 13C14.4114 13 14.0114 12.6 14.0114 12C14.0114 11.4 14.4114 11 15.0114 11C15.6114 11 16.0114 11.4 16.0114 12C16.0114 12.6 15.6114 13 15.0114 13Z"
      fill="#ffffff"
    ></path>
  </svg>
);
const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HeartSvg} {...props} />
);

const TestnApp = () => {
  const [collapsed, setCollapsed] = useState(false);

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
    <Layout className={styles.main_layout}>
      <Sider
        className={styles.Sider_Contaienr}
        trigger={null}
        collapsible
        collapsed={collapsed}
        width="17%"
      >
        <SiderApp />
        <div className={styles.collapse_btn}>
          {React.createElement(
            collapsed ? RightCircleOutlined: LeftCircleOutlined,
            {
              className: 'trigger',
             
              onClick: () => setCollapsed(!collapsed),
            },
          )}
        </div>
      </Sider>
      <Layout className={styles.Content_Container} style={{ width: '83%' }}>
        <Header
          className={styles.Header_layout_background}
          style={{
            padding: 0,
            minHeight: 100,
          }}
        >
          <h1 className={styles.title_center}>
            {' '}
            <HeartIcon style={{ color: 'white', marginRight: '1%' }} />
            Marketplace
          </h1>
          {/* {React.createElement(
            collapsed ? RightCircleOutlined : LeftCircleOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            },
          )} */}
        </Header>
        <Content className={styles.main_containerd}>
          <AppHome />
        </Content>
      </Layout>
    </Layout>
  );
};

export default TestnApp;
