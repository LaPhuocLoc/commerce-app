// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import './categories.scss'

import { categories } from '../../assets/data/data'

import Button from '../Button/Button'
import BgText from '../BgText/BgText'
const Categories = () => {

  const categoriesItems = categories

  return (
    <>
      <section className="categories">
        <Row>
          {categoriesItems.map((item, i) => (
            <Col xs={24} lg={12} key={i}>
              <div className="categories__item" id={`categories__item-${i}`}>
                <BgText text={item.name} />
                <Row>
                  <Col span={6} offset={3}>
                    <div className="categories__item__info">
                      <div className="price">
                        <span className="price-text mb-1">Starting from</span>
                        <span className="price-num">$ {item.startPrice},-</span>
                      </div>
                      <div className="browse">
                        <h2 className="name mb-2">{item.name}</h2>
                        <Link to={item.url}>
                          <Button type="minus">
                            Browse
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="categories__item__img" id={`img-${item.name}`}>
                  <img src={require('../../assets/categories/' + item.path)} alt="" />
                </div>
              </div>
            </Col>
          ))}

        </Row>
      </section>

    </>
  )
}

export default Categories