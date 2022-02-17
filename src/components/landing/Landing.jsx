import React from 'react'
import * as classes from './Landing.module.scss';

const Landing = () => {
  return (
    <div className={classes.landingContainer}>
      <div className={classes.welcomeMessage}>
        <p className={classes.landingHello}>Yes, this is a react boilerplate!</p>
        <p className={classes.landingName}>This is setup <span className={classes.name}>REALLY WELL!</span>.</p>
      </div>
    </div>
  )
}


export default Landing
