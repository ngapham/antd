import React from 'react';
import AppFeature from '../components/home/feature';
import AppFaq from '../components/home/faq';
import AppContact from '../components/home/contact';
import { Tabs } from 'antd';
import styles from './index.less';
const { TabPane } = Tabs;

const onChange = (key?: any) => {
  console.log(key);
};

const AppHome = () => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Axies" key="1">
      <div className={styles.category_products}>
        <AppFeature />
      </div>
    </TabPane>
    <TabPane tab="Land" key="2">
      <div className={styles.category_products}>
        <AppFeature />
      </div>
    </TabPane>
    <TabPane tab="Items" key="3">
      <div className={styles.category_products}>
        <AppFeature />
      </div>
    </TabPane>
    <TabPane tab="Bundles" key="4" >
      <div className={styles.category_products}>
        <AppFeature />
      </div>
    </TabPane>
  </Tabs>
);

export default AppHome;
