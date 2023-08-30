import React, { useEffect, useState } from 'react'
import { Logo, SearchIcon } from '../../assets'
import { Input } from 'antd'
import '../../GeneralStyle/index.scss'
import './TopBar.scss'
import { useNavigate } from 'react-router-dom'
import Link from 'antd/es/typography/Link'

const TopBar = ({ button, activeClass, tabsColor }) => {

  const [activeTabs, setActiveTabs] = useState("")


  const navigate = useNavigate()
  const windowLocation = window.location.pathname

  const tabs = (tab, path) => {
    setActiveTabs(tab)
    navigate(path)

  }

  return (
    <div className='headerMain'>
      <div className='header'>
        <div className='left-side'>
          <img src={Logo} />
          <Input className='ant-input-affix-wrapper' placeholder='Search iSTA...' suffix={<img src={SearchIcon} />} />
        </div>
        <div className='right-side'>
          <div className='tabs'>
            <p className={windowLocation.includes("home") && activeClass} onClick={() => tabs("home", "/home")}>
              Home
            </p>
            <p className={windowLocation.includes("about") && activeClass} onClick={() => tabs("about", "/about")}>
              About
            </p>
            <p className={windowLocation.includes("contact") && activeClass} onClick={() => tabs("contact", "/contact")}>
              Contact
            </p>
          </div>
            <button onClick={()=>navigate("/joinig")} className={button == "Join" && "loginButton"}>{button}</button>
        </div>
      </div>
    </div>
  )
}

export default TopBar