import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import h1 from '../../assets/images/h5.png';
import h2 from '../../assets/images/h6.png';
import h3 from '../../assets/images/h3.png';
import { useState } from 'react';
import TabApp from './tab';



const App = () => {
  let [show, setShow] = useState<boolean>(false);
  console.log("Dong 70", `show: ${show}`);
  
  return (
    <>
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{
          width: 250,
        }}
        // options={options}
        
        onFocus={(e) => {
          console.log('onFocus', e);
          setShow(true);
        }}
        // onFocus={(e) => {
        //   console.log('onFocus', e);
        //   setShow(true);
        // }}
      >
        <Input
          placeholder="Search parts and abilities"
          prefix={<SearchOutlined />}
        />
      </AutoComplete>
     {
      show && (
        <TabApp />
      )
     }
    </>
  );
};

export default App;
