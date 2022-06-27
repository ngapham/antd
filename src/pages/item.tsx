import React from 'react';

import 'antd/dist/antd.css';
import '../pages/index.less';
import styles from './index.less';
import image1 from '../assets/images/h7.png';

import SiderApp from '../components/common/sider';
import AppItem from '../components/Item/index';
import { Col, Layout, List, Row, Affix, Button, Card } from 'antd';
import { useState } from 'react';
import { history, Redirect } from 'umi';
export type SiderTheme = 'light' | 'dark';
const data = [
  {
    title: ' Title 1',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },
];
const ItemApp = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
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
        history.push('/marketplace');
        break;
      case '3':
        console.log('Chuyen sang lunacian express');
        break;
    }
  }
  return (
    <Layout>
      <Row className="product_detail scrollable-container">
        <Col
          className={styles.product_image}
          ref={setContainer}
          style={{ display: 'flex', flex: 'auto', width: '50%' }}
        >
          <Affix style={{ position: 'absolute', top: '0px', left: '0px' }}>
          <Card className={styles.axie_card}>
              <Row gutter={[0, 2]} className={styles.axie_card_top}>
                <Col span={24}>
                  <span>#1234567</span>
                </Col>

                <Col span={24}>
                  <span>Team 19</span>
                </Col>
              </Row>
              <Row className={styles.axie_card_middle}>
                <Col span={24}>
                  <img src="https://axiecdn.axieinfinity.com/axies/8600393/axie/axie-full-transparent.png"></img>
                </Col>
              </Row>
            </Card>
          </Affix>
        </Col>

        <Col className={styles.details_pro} style={{ width: '50%' }}>
        <div className="site-card-border-less-wrapper">
            <Card
              title="Card title2"
              bordered={false}
              style={{ width: '100%' }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        <div className="site-card-border-less-wrapper">
            <Card
              title="Card title2"
              bordered={false}
              style={{ width: '100%' }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Card title2"
              bordered={false}
              style={{ width: '100%' }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Card title3"
              bordered={false}
              style={{ width: '100%' }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default ItemApp;
