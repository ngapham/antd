import {
  AudioOutlined,
  AppstoreOutlined,
  BarsOutlined,
} from '@ant-design/icons';
import { Space, Dropdown, Menu, Tabs } from 'antd';
import AppFeature from '../../components/home/feature';
import { DownOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

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
        label: <a href="https://www.aliyun.com">Lowest Price</a>,
        key: '2',
      },
      {
        label: <a href="https://www.aliyun.com">Highest Price</a>,
        key: '3',
      },
      {
        label: <a href="https://www.aliyun.com">Latest</a>,
        key: '4',
      },
    ]}
  />
);
const App = () => (
  <div className="ListToto">
    <div className="SelectToto" />
    <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Lowest Price
          <DownOutlined />
        </Space>
      </a>
      
    </Dropdown>

    <div className="tabList" />
    <Tabs defaultActiveKey="2">
      <TabPane
        tab={
          <span className="ViewOptions">
            <AppstoreOutlined />
          </span>
        }
        key="1"
      >
        <AppFeature />
      </TabPane>
      <TabPane
        tab={
          <span className="ViewOptions">
            <BarsOutlined />
          </span>
        }
        key="2"
      >
        <AppFeature />
      </TabPane>
    </Tabs>

    <Space direction="vertical"></Space>
  </div>
);

export default App;
