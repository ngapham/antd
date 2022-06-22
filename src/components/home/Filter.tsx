import {
  Button,
  Dropdown,
  Menu,
  Space,
  Radio,
  Form,
  Collapse,
  Slider,
  Switch,
  InputNumber,
  Cascader,
  Input,
  Select,
  Checkbox,
} from 'antd';
import { CaretRightOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import styles from './index.less';
// icon main filter
import aquatic from '../../assets/images/icon/aquatic.png';
import beast from '../../assets/images/icon/beast.png';
import bird from '../../assets/images/icon/bird.png';
import bug from '../../assets/images/icon/bug.png';
import dawn from '../../assets/images/icon/dawn.png';
import dusk from '../../assets/images/icon/dusk.png';
import mech from '../../assets/images/icon/mech.png';
import plant from '../../assets/images/icon/plant.png';
import reptile from '../../assets/images/icon/reptile.png';
// icon Potential Points filter
import aquatic_crest from '../../assets/images/icon/aquatic-crest.png';
import beast_crest from '../../assets/images/icon/beast-crest.png';
import bird_crest from '../../assets/images/icon/bird-crest.png';
import bug_crest from '../../assets/images/icon/bug-crest.png';
import dawn_crest from '../../assets/images/icon/dawn-crest.png';
import dusk_crest from '../../assets/images/icon/dusk-crest.png';
import mech_crest from '../../assets/images/icon/mech-crest.png';
import plant_crest from '../../assets/images/icon/plant-crest.png';
import reptile_crest from '../../assets/images/icon/reptile-crest.png';

const { Option } = Select;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const plainOptions = ['Egg', 'Adult'];
const options = [
  { label: 'Meo', value: 'Meo' },
  { label: 'MEOII', value: 'MEOII' },
  { label: 'Origin', value: 'Origin' },
];
const options1 = [
  { label: 'For Sale', value: 'forsale' },
  { label: 'Not For Sale', value: 'notforsale' },
];

const imgArr: any[] = [
  // beast,
  // aquatic,
  // plant,
  // bug,
  // bird,
  // reptile,
  // mech,
  // dawn,
  // dusk,
  {
    text: 'beast',
    img: beast,
  },
  {
    text: 'aquatic',
    img: aquatic,
  },
  {
    text: 'plant',
    img: plant,
  },
  {
    text: 'bug',
    img: bug,
  },
  {
    text: 'bird',
    img: bird,
  },
  {
    text: "reptile",
    img: reptile
  },
  {
    text: 'mech',
    img: mech,
  },
  {
    text: 'dawn',
    img: dawn,
  },
  {
    text: 'dusk',
    img: dusk,
  },
];

const FilterApp: React.FC = () => {
  
  const [reverse, setReverse] = useState(true);

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const onChange1 = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };

  const onChangeNumber = (value: number) => {
    console.log('changed', value);
  };

  function ListBtn() {
    const listItem = imgArr?.map((e, i) => (
      <Button type="primary" icon={<img src={e.img} />} ghost >
        {e.text}
      </Button>
    ));
    return <ul>{listItem}</ul>;
  }

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      className="site-collapse-custom-collapse"
    >
      <Panel header="Game" key="1">
        <Radio.Group
          className={styles.radio_group}
          name="radiogroup"
          defaultValue={1}
        >
          <Space direction="vertical">
            <Radio value={1}>Origin</Radio>
            <Radio value={2}>Classic</Radio>
          </Space>
        </Radio.Group>
      </Panel>
      <Panel header="Class" key="2">
        <ListBtn />
        <br />
      </Panel>
      <Panel header="Parts" key="3">
        <Input
          placeholder="Search parts and abilities"
          prefix={<SearchOutlined />}
        />
      </Panel>
      <Panel header="Purity & Genes" key="4">
        <p>{text}</p>
      </Panel>
      <Panel header="Breed count" key="5">
        <Slider
          range
          defaultValue={[1, 7]}
          tooltipVisible
          step={1}
          min={1}
          max={7}
        />
      </Panel>
      <Panel header="Potential Points" key="6">
        <InputNumber
          min={1}
          max={10}
          defaultValue={10}
          prefix={
            <>
              <img src={beast_crest}></img>
            </>
          }
          onChange={onChangeNumber}
        />
        <InputNumber
          min={1}
          max={10}
          prefix={
            <>
              <img src={plant_crest}></img>
            </>
          }
          onChange={onChangeNumber}
        />
        <br />

        <InputNumber
          min={1}
          max={10}
          prefix={
            <>
              <img src={aquatic_crest}></img>
            </>
          }
          onChange={onChangeNumber}
        />

        <InputNumber
          min={1}
          max={10}
          prefix={
            <>
              <img src={reptile_crest}></img>
            </>
          }
          onChange={onChangeNumber}
        />
        <br />
        <InputNumber
          min={1}
          max={10}
          prefix={
            <>
              <img src={bug_crest}></img>
            </>
          }
          onChange={onChangeNumber}
        />

        <InputNumber
          min={1}
          max={10}
          prefix={
            <>
              <img src={bird_crest}></img>
            </>
          }
          onChange={onChangeNumber}
        />
        <br />
        <InputNumber
          min={1}
          max={10}
          prefix={
            <>
              <img src={dusk_crest}></img>
            </>
          }
          onChange={onChangeNumber}
        />

        <InputNumber
          min={1}
          max={10}
          prefix={
            <>
              <img src={mech_crest}></img>
            </>
          }
          onChange={onChangeNumber}
        />
        <br />
        <InputNumber
          min={1}
          max={10}
          prefix={
            <>
              <img src={dawn_crest}></img>
            </>
          }
          onChange={onChangeNumber}
        />
      </Panel>
      <Panel header="Other" key="7">
        <h1>Stage</h1>
        <Checkbox.Group options={plainOptions} onChange={onChange1} />
        <br />
        <br />
        <h1>Other</h1>
        <Checkbox.Group options={options} onChange={onChange1} />
        <br />
        <br />
        <h1>Status</h1>
        <Checkbox.Group
          options={options1}
          defaultValue={['forsale']}
          onChange={onChange1}
        />
        <br />
      </Panel>
    </Collapse>
  );
};
export default FilterApp;
