import React from 'react'
import styles from './Panel.module.css'
import { Outlet } from 'react-router-dom'
const Panel = () => {

  return (
    <div className={styles.panel}>
      <Outlet/>
    </div>
  )
}

export default Panel