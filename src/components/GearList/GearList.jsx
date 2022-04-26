// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';
import { Row, Col } from 'antd'
import { featured, newgears } from '../../assets/data/data'
import './gear-list.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Button from './../Button/Button';
import GearCard from './../GearCard/GearCard';
import BgText from './../BgText/BgText'
const GearList = props => {

  const [items, setItems] = useState([])
  useEffect(() => {
    const getList = async () => {
      let response = null
      switch (props.type) {
        case "featured":
          response = featured
          break;
        default:
          response = newgears
      }
      setItems(response)
    }
    getList()
  }, [])


  return (
    <section className="gear-list" >
      <BgText text={props.bgText} />
      <div className="gear-list__heading">
        <div className="container">
          <Row>
            <Col sm={8}>
              <h2 className="title">{props.type} Gears</h2>

            </Col>
            <Col sm={8} offset={8}>
              <div className="browse">
                <Link to={props.cate}>
                  <Button type="minus">Browse</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="gear-list__slide">
        <div className="container">
          <div className="gear-list__slide__side">
            <p>most popular gaming gears</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            grabCursor={true}
            nested={true}
            navigation
            pagination={{
              clickable: true,
              type: 'fraction',
              renderFraction: function (currentClass, totalClass, i) {
                return (`
          <div class="custom-pagination-container">
            <span class="${currentClass}">${i}</span>
            <span class="pagination-divider"></span>
            <span class="${totalClass}">${i}</span>
          </div>
          `)
              }
            }}
            breakpoints={{
              // when window width is >= 640px
              576: {
                slidesPerView: 2,
              },
              // when window width is >= 768px
              992: {
                slidesPerView: 4,
              },
            }}
          >
            {items.map((item, i) => (
              <SwiperSlide key={i} >
                <GearCard item={item} />
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </div>
    </section>
  )
}

export default GearList