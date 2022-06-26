import { Layout, List, Row, Space, Col, Tabs, Button, Dropdown } from 'antd';
import {
  AppstoreOutlined,
  UnorderedListOutlined,
  DownOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import FilterApp from '../../components/home/Filter';
import AxieCardList from '../CardList/AxieCardList';
import HeaderDropdown from '../../components/HeaderDropdown/index';
import styles from './index.less';
import React, { useMemo, useState } from 'react';
import image1 from '../../assets/images/h7.png';
import image2 from '../../assets/images/h8.png';
import image3 from '../../assets/images/h3.png';
import image4 from '../../assets/images/h4.png';
import image5 from '../../assets/images/h5.png';
import image6 from '../../assets/images/h6.png';
const { TabPane } = Tabs;
const data = [
  {
    title: ' Title 1',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },
  {
    title: ' Title 2',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image2,
  },
  {
    title: ' Title 3',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image3,
  },
  {
    title: ' Title 4',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image4,
  },
  {
    title: ' Title 5',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image5,
  },
  {
    title: 'Title 6',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image6,
  },
  {
    title: ' Title 7',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image3,
  },
  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },
  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },
  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },

  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },
  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },

  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },

  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },

  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },

  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },
];

type PositionType = 'left';

function FeatureApp() {
  const OperationsSlot: Record<PositionType, React.ReactNode> = {
    left: <HeaderDropdown />,
  };
  const [position, setPosition] = useState<PositionType[]>(['left']);

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
        <Col span={20} push={4}>
          <div className={styles.product_item}>
            <div className={styles.product_item_title}>
              <h2 className={styles.title_app_feature}>685,236 Axies</h2>
            </div>
            <div className={styles.product_item_content}>
              <Tabs
                defaultActiveKey="1"
                tabBarExtraContent={slot}
                tabBarGutter={0}
                // tabPosition='right'
              >
                <TabPane
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

export default FeatureApp;
