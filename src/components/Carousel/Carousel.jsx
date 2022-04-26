// @ts-nocheck
import React from 'react'
import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Row, Col } from 'antd'
import carousel from '../../assets/data/data'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade'

import './carousel.scss'
import Social from '../Social/Social';
import Button from '../Button/Button';
import BgText from '../BgText/BgText';
const Carousel = () => {

  const carouselItems = carousel

  return (
    <div className="carousel">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          grabCursor={true}
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
          effect='fade'
        >
          {carouselItems.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <CarouselItem
                  item={item}
                  className={`${isActive ? 'active' : ''}`}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

const CarouselItem = props => {

  const item = props.item

  return (
    <div
      className={`carousel__item ${props.className}`}
    >
      <div className="carousel__item__content">
        <BgText text={item.type} />
        <Row>
          <Col xs={2} sm={3}>
            <div className="carousel__item__content__side">
              <div className="align-div"></div>
              <p>welcome to gaming - gears</p>
              <Social />
            </div>
          </Col>
          <Col xs={22} sm={8}>
            <div className="carousel__item__content__info">
              <div className="align-div"></div>
              <div className="carousel__item__content__info-text">
                <div className="carousel__item__content__info-text__title mb-3"><span>{item.type}</span><h1>{item.name}</h1></div>
                <div className="price">
                  <span className="price-up"><i className="fa-solid fa-dollar-sign"></i> {item.priceUp},-</span>
                  <span className="price-down"><i className="fa-solid fa-dollar-sign"></i> {item.priceDown},-</span>
                </div>
              </div>
              <Button type="plus">
                Add to cart
              </Button>
            </div>
          </Col>
          {/* <Col span={13}>
            <div className="carousel__item__content__img">
              <img src={require('../../assets/carousel/' + item.path)} alt="" />
            </div>
          </Col> */}
        </Row>
        <div className="carousel__item__content__img">
          <img src={require('../../assets/carousel/' + item.path)} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Carousel