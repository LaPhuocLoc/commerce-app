import React from 'react'
import './home.scss'
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';
import GearList from '../../components/GearList/GearList';
import Divider from '../../components/Divider/Divider';
import ProGamer from '../../components/ProGamer/ProGamer';
const Home = () => {
  return (
    <>
      <Carousel />
      <Categories />
      <GearList type="featured" bgText="featured" cate="featured" />
      <Divider />
      <GearList type="new" bgText="newstuff" cate="newgears" />
      <Divider />
      <ProGamer />
    </>
  )
}

export default Home