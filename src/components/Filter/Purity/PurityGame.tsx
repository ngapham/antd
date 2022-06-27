import { Col, InputNumber, Row, Slider } from 'antd';
import type { StepsProps } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.less';

const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);

  const onChange = (data: any) => {
    console.log("onChange:", data);
    // setInputValue(newValue);
  };

  return (
    <Row>
      <Col span={24}>
      <Slider 
      range={{ draggableTrack: true }} 
      defaultValue={[20, 50]}
      onChange={onChange}
     
      />;

 <Col span={24}>
        <InputNumber
          min={20}
          max={50}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
        <InputNumber
           min={20}
           max={50}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
   
        
      </Col>
     
    </Row>
  );
};
const DecimalStep = () => {
  const [inputValue, setInputValue] = useState(0);

  const onChange = (value: number) => {
    if (isNaN(value)) {
      return;
    }

    setInputValue(value);
  };
};
const PurityGameApp: React.FC = () => (
  <div>
    <IntegerStep />
  </div>
);

export default PurityGameApp;
