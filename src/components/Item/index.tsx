import React from 'react';
// import AppFeature from '../components/home/feature';

import { Tabs } from 'antd';
import styles from './index.less';
import Icon, { HomeOutlined } from '@ant-design/icons';
// icontab

import tab_axie from '../../assets/images/tab-axie.png';
import tab_bundle from '../../assets/images/tab-bundle.png';
import tab_item from '../../assets/images/tab-item.png';
import tab_land from '../../assets/images/tab-land.png';
const { TabPane } = Tabs;

const onChange = (key?: any) => {
  console.log(key);
};

const AppItem = () => (
  <div className={styles.tab_filter}>
  
    <Tabs
      defaultActiveKey="1"
      onChange={onChange}
      className={styles.tab_filter}
    >
      <TabPane
        tab={
          <span className={styles.tab_title}>
            &ensp;&ensp;&ensp;
            <Icon
              component={() => (
                <img src={tab_axie} height={25} width={25}></img>
              )}
            />
             Axies
          </span>
        }
        key="1"
      >
        <div className={styles.category_products}>
          
        </div>
      </TabPane>
      <TabPane
        tab={
          <span className={styles.tab_title}>
            <Icon
              component={() => (
                <img src={tab_land} height={25} width={25}></img>
              )}
            />
            Land
          </span>
        }
        key="2"
        closeIcon
      >
        <div className={styles.category_products}>
          
        </div>
      </TabPane>
      <TabPane
        className={styles.tab_list_container}
        tab={
          <span className={styles.tab_title}>
            <Icon
              component={() => (
                <img src={tab_item} height={25} width={25}></img>
              )}
            />
            Items
          </span>
        }
        key="3"
      >
        <div className={styles.category_products}>
          
        </div>
      </TabPane>
      <TabPane
        tab={
          <span className={styles.tab_title}>
            <Icon
              component={() => (
                <img src={tab_bundle} height={25} width={25}></img>
              )}
            />
            Bundles
          </span>
        }
        key="4"
      >
        <div className={styles.category_products}>
      
        </div>
      </TabPane>
    </Tabs>
  </div>
);

export default AppItem;
