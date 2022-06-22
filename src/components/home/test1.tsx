import { Steps } from 'antd';
import { useEffect, useState } from 'react';
const { Step } = Steps;

const App = () => {
  const [current, setCurrent] = useState<number>(0);

  const onChange = (current: number) => {
    console.log('onChange:', current + '');
    setCurrent(current);
  };
  
  const hello = () => {
    switch(current){
        case 0:
            return(
                <div className="test">
                    <h1>nga</h1>
                </div>
            )

        case 1: 
                return (
                    <div className="test">
                    <h1>nga dth</h1>
                </div>
                )
        default:
            return (
                <div className="test">
                <h1>nga xinh dep</h1>
            </div>
            )       
    }
  }

  return (
    <>
     
      <Steps
        type="default"
        current={current}
        onChange={onChange}
        className="site-navigation-steps" 
      >
        <Step  />
        <Step />
        <Step />
        <Step />
      </Steps>

      {hello()}
    </>
  );
};

export default App;
