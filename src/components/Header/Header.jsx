import React, { useEffect, useRef, useState } from 'react'
import './header.scss'
import { Link, useLocation } from 'react-router-dom'
import { Row, Col } from 'antd'
const headerNav = [
  {
    path: '/mouse',
    name: 'Mouses'
  },
  {
    path: '/keyboard',
    name: 'Keyboards'
  },
  {
    path: '/headset',
    name: 'Headsets'
  },
  {
    path: '/mousepad',
    name: 'Mousepads'
  },
]

const Header = () => {
  const [small, setSmall] = useState(false)
  const { pathname } = useLocation()
  const active = headerNav.findIndex(item => item.path === pathname)
  const headerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setSmall(window.pageYOffset > 200)
      })
    }
  }, [])

  return (
    <div className={`header ${small ? "small" : ""}`} >
      <div className="header-wrap container">
        <Row gutter={0}>
          <Col span={3}>
            <div className="logo">
              <Link to="/">AGS</Link>
            </div>
          </Col>
          <Col span={8}>
            <ul className="nav-list">
              {headerNav.map((item, i) => (
                <li key={i} className={`${i === active ? 'active' : ''}`}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col span={5} offset={8}>
            <Row className="user">
              <Col span={18}>
                <span className="user__avt"><i className="fa-solid fa-circle-user"></i></span>
                <span className="user__name">La Phuoc Loc</span>
              </Col>
              <Col span={6}>
                <span className="user__cart">3</span>
              </Col>
            </Row>
          </Col>
        </Row>


      </div>
    </div>
  )
}

export default Header