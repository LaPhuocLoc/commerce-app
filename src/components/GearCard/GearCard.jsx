import React from 'react'
import './gear-card.scss'
import Button from './../Button/Button';
const GearCard = props => {

  const item = props.item

  return (
    <div className="gear-card">
      <div className="gear-card__img">
        <img src={require('../../assets/categories/' + item.path)} alt="" />
      </div>
      <div className="gear-card__body">
        <div className="name">
          <h3>{item.name}</h3>
          <p>{item.brand}</p>
        </div>
        <div className="price">
          <p>$ {item.price},-</p>
        </div>
        <div className="add-to-cart">
          <Button className="small" type="plus">
            add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GearCard