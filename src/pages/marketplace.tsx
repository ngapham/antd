import React from 'react';
import AppFeature from '../components/home/feature';
import AppFaq from '../components/home/faq';
import AppContact from '../components/home/contact';
import { Tabs } from 'antd';
import * as umi from "umi";
const { TabPane } = Tabs;

const onChange = (key?:any) => {
  console.log(key);
};

const AppHome = () => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Axies" key="1">
    <div className="main">
     
     
     <AppFeature/>
    
     {/* <AppFaq/> */}

   </div>
    </TabPane>
    <TabPane tab="Land" key="2">
    <AppFeature/>
    </TabPane>
    <TabPane tab="Items" key="3">
    <AppFeature/>
    </TabPane>
  </Tabs>
);

export default AppHome;