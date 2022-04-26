import React from 'react'
import './pro-gamer.scss'
import { Row, Col } from 'antd'
import faker1 from '../../assets/player/faker1.png'
import faker2 from '../../assets/player/faker2.png'
import Button from '../Button/Button'
import BgText from '../BgText/BgText'


const items = [
  {
    textBg: 'tests',
    smallText: 'Video test of gaming gears',
    title: 'Gear Tests',
    title2: 'by ProGamers',
    imgPath: faker1
  },
  {
    textBg: 'tips',
    smallText: 'Tricky tips in CS:GO, LOL and Dota 2',
    title: 'Game Tips',
    title2: 'From SKT T1 Faker',
    imgPath: faker2
  }
]

const ProGamer = () => {

  return (
    <section className="pro-gamer">
      <Row>
        {items.map((item, i) => (
          <Col xl={12} span={24} key={i}>
            <ProGamerItem item={item} />
          </Col>
        ))}
      </Row>
    </section>
  )
}
const ProGamerItem = props => {

  const item = props.item

  return (
    <div className="pro-gamer__item">
      <BgText text={item.textBg} />
      <Row>
        <Col span={21} offset={3}>
          <div className="pro-gamer__item__info">
            <p className="pro-gamer__item__info-top">{item.smallText}</p>
            <div className="pro-gamer__item__info-bottom">
              <h2 className="title">
                <span>{item.title}</span>
                <span>{item.title2}</span>
              </h2>
              <div className="watch-video-btn">
                <Button type="minus">watch videos</Button>

              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="pro-gamer__item__img">
        <img src={item.imgPath} alt="" />
      </div>
    </div>
  )
}

export default ProGamer