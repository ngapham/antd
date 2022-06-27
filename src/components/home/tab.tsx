import { Button, Checkbox, Divider, Tabs } from 'antd';
import { useMemo, useState } from 'react';
const { TabPane } = Tabs;
const CheckboxGroup = Checkbox.Group;
const operations = <Button>Extra Action</Button>;
const OperationsSlot = {
  
  left: <p>681,443 Axies</p>,
  right: <Button className="tabs-extra-demo-button">Lowest Price</Button>,
};
const options = ['left', 'right'];

const App = () => {
  const [position, setPosition] = useState(['left', 'right']);
  const slot = useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {},
    );
  }, [position]);
  return (
    <>
     
     
     
      <br />
      <br />
      <Tabs tabBarExtraContent={slot}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
    </>
  );
};

export default App;