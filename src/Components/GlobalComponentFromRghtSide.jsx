import React from 'react'
import TopHeaderComponent from './TopHeaderComponent'
import HorizontalComponent from './HorizontalComponent'
import HeaderComponent from './HeaderComponent'

const GlobalComponentFromRghtSide = () => {
  return (
    <div className=''>
        <TopHeaderComponent/>
        <HeaderComponent/>
        <HorizontalComponent/>
    </div>
  )
}

export default GlobalComponentFromRghtSide
