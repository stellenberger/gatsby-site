import React from 'react'
import classes from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import { Burger } from '../index'

const TopNavigation = ({ changeColor, backgroundColor, backgroundHeroImage }) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarContent}>
        <Burger backgroundColor={backgroundColor} changeColor={changeColor} backgroundHeroImage={backgroundHeroImage}/>
      </div>
    </div>
  )
}

export default TopNavigation
