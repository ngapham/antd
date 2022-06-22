import React from 'react';
import { Col, Row, Card, Button, Dropdown, Space,Menu } from 'antd';
import styles from './AxieCardList.less';
import { DownOutlined } from '@ant-design/icons';
import menu from 'antd/lib/menu';
export default function HeaderDropdown() {
  const menu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">Lowest ID</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">Highest ID</a>,
          key: '1',
        },
  
        {
          label: 'Lowest Price',
          key: '3',
        },
        {
          label: 'Highest Price',
          key: '4',
        },
        {
          label: 'Latest',
          key: '5',
        },
      ]}
    />
  );
  
  return (
   <><Dropdown overlay={menu} trigger={['click']}>
   <Button onClick={(e) => e.preventDefault()}>
     <Space>
       Lowest Price
       <DownOutlined />
     </Space>
   </Button>
 </Dropdown></>
  );
}