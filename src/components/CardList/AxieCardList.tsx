import { Col, Row, Card } from 'antd';
import styles from './AxieCardList.less';
import { Pagination } from 'antd';
import React, { useMemo, useState } from 'react';
import image1 from '../../assets/images/h7.png';
import image2 from '../../assets/images/h8.png';
import image3 from '../../assets/images/h3.png';
import image4 from '../../assets/images/h4.png';
import image5 from '../../assets/images/h5.png';
import image6 from '../../assets/images/h6.png';
const data = [
  {
    title: ' Title 1',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },
  {
    title: ' Title 2',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image2,
  },
  {
    title: ' Title 3',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image3,
  },
  {
    title: ' Title 4',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image4,
  },
  {
    title: ' Title 5',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image5,
  },
  {
    title: 'Title 6',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image6,
  },
  {
    title: ' Title 7',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image3,
  },
  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },
  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },
  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },

  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },
  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },

  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },

  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },

  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },

  {
    title: ' Title 8',
    href: 'https://ant.design',
    id: 10973986,
    dola: 1,
    price: 0.03,
    image: image1,
  },
];
export default function AxieCardList() {
  let card = (
    <Col xxl={{ span: 6 }}>
      <Card className={styles.axie_card}>
        <Row gutter={[0, 2]} className={styles.axie_card_top}>
          <Col span={24}>
            <span>#1234567</span>
          </Col>
          <Col span={24}>
            <img src="https://marketplace.axieinfinity.com/static/icons/class/plant.png"></img>
            <span>Axie #1234567</span>
          </Col>
          <Col span={24}>
            <span>Bread count: 5</span>
          </Col>
        </Row>
        <Row className={styles.axie_card_middle}>
          <Col span={24}>
            <img src="https://axiecdn.axieinfinity.com/axies/8600393/axie/axie-full-transparent.png"></img>
          </Col>
        </Row>
        <Row className={styles.axie_card_bottom}>
          <Col span={24}>
            <div>
              <span>Ξ 0.003</span>
              <span>$3</span>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );

  let cards = [];
  for (let index = 0; index < 12; index++) {
    cards.push(card);
  }

  return (
    <>
      {/* <Layout>
                    <List
                      grid={{ gutter: 1, column: 1 }}
                      size="small"
                      pagination={{
                        onChange: (page) => {
                          console.log(page);
                        },
                        pageSize: 15,
                      }}
                      dataSource={data}
                      renderItem={(item) => (
                        <List.Item
                          key={item.title}
                          actions={[
                            <img width={272} alt="logo" src={item.image} />,
                          ]}
                        >
                          
                          <div className="card-title">
                            <span
                              style={{ backgroundColor: randomColors() }}
                              className="truncate"
                            >
                              {' '}
                              {item.id}
                            </span>
                            <span className="truncate">
                              {' '}
                              Axie # {item.dola}
                            </span>
                            <span className="block text-gray-2 truncate">
                              Breed count:
                            </span>
                            <span className="truncate"> {item.price}</span>
                          </div>
                        </List.Item>
                      )}
                    />
                  </Layout> */}
      <Row
        gutter={[16, 16]}
        className={styles.axie_card_list}
        justify={'center'}
      >
        {cards}

        
      </Row>
      <Pagination defaultCurrent={1} total={5} />
    </>
  );
}
