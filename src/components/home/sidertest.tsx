import { Button, Checkbox, Divider, Tabs } from 'antd';
import React, { useMemo, useState } from 'react';
import HeaderDropdown from '../../components/HeaderDropdown/index';

const { TabPane } = Tabs;

const OperationsSlot: Record<PositionType, React.ReactNode> = {
  left: <HeaderDropdown />,
};


type PositionType = 'left';

const App: React.FC = () => {
  const [position, setPosition] = useState<PositionType[]>(['left']);

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