import { Layout, List, Row, Space, Col, Tabs, Button, Dropdown } from 'antd';
import {
  AppstoreOutlined,
  UnorderedListOutlined,
  DownOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import FilterApp from '../../components/home/Filter';
import AxieCardList from '../../components/CardList/AxieCardList';
import HeaderDropdown from '../../components/HeaderDropdown/index';
import styles from './test.less';
import React, { useMemo, useState } from 'react';
import heart from '../../assets/images/icon/heart.png';
import image2 from '../../assets/images/h8.png';
import image3 from '../../assets/images/h3.png';
import image4 from '../../assets/images/h4.png';
import image5 from '../../assets/images/h5.png';
import image6 from '../../assets/images/h6.png';
const { TabPane } = Tabs;
type PositionType = 'left' | 'right';

function TestTabApp() {
  const OperationsSlot: Record<PositionType, React.ReactNode> = {
    right: <HeaderDropdown />,
    left: (
      <div className={styles.product_item_title}>
        <h2 className={styles.title_app_feature}>685,236 Axies</h2>
        <img src={heart} alt="" />
      </div>
    ),
  };
  const [position, setPosition] = useState(['left', 'right']);
  const slot = useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {},
    );
  }, [position]);
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  return (
    <Layout className={styles.products_view}>
      <Row>
        <Col span={20} push={4} className={styles.product_card}>
          <div className={styles.product_item}>
            <div className={styles.tab_item_content}>
              <Tabs
                defaultActiveKey="1"
                tabBarExtraContent={slot}
                tabBarGutter={0}
                animated
               
                className={styles.tab_content}
              >
                <TabPane
                  className={styles.tabpane_content}
                  tab={
                    <Button>
                      <AppstoreOutlined />
                    </Button>
                  }
                  key="1"
                >
                  <div className={styles.axie_body}>
                    <AxieCardList />
                  </div>
                </TabPane>
                <TabPane
                  className={styles.tabpane_content}
                  tab={
                    <Button>
                      <UnorderedListOutlined />
                    </Button>
                  }
                  key="2"
                >
                  <div className={styles.axie_body}>
                    <AxieCardList />
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </Col>
        <Col span={4} pull={20}>
          <div className={styles.menu_left}>
            <FilterApp />
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default TestTabApp;
