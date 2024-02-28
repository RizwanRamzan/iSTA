import React, { useEffect, useState } from 'react'
import { Logo, SearchIcon } from '../../assets'
import { Drawer, Input, message } from 'antd'
import '../../GeneralStyle/index.scss'
import './TopBar.scss'
import { useNavigate } from 'react-router-dom'
import Link from 'antd/es/typography/Link'
import { useMediaQuery } from 'react-responsive'
import { MenuFoldOutlined } from "@ant-design/icons"

const TopBar = ({ button, activeClass, tabsColor }) => {

  const [activeTabs, setActiveTabs] = useState("")
  const [open, setOpen] = useState(false);


  const navigate = useNavigate()

  const tabs = (tab, path) => {
    setActiveTabs(tab)
    navigate(path)
  }


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Use Media Query
  const mobileResponsive = useMediaQuery({
    query: '(max-width: 800px)'
  })



  return (
    <div className='headerMain'>
      <div className='header'>
        <img onClick={() => navigate("/")} src={Logo} />
        {
          mobileResponsive ?
            <div>
              <MenuFoldOutlined onClick={() => showDrawer()} style={{ fontSize: "30px" }} />
            </div>
            :
            <>

              <div className='tabs'>
                <a href='https://64fe41cb8667876d1f17be27--stupendous-brioche-87051a.netlify.app/' target='_blank'>
                  <p style={{ color: "#3B7DED" }} >
                    isttaa Institute
                  </p>
                </a>
                <a href='https://64fe4200d0af9f77106bc62d--musical-macaron-279441.netlify.app/' target='_blank'>
                  <p style={{ color: "#2BA24C" }} >
                    isttaa Solutions
                  </p>
                </a>
                <p onClick={()=>message.warning("Comming Soon")} style={{ color: "#E43E2B" }} >
                  isttaa Store
                </p>
              </div>
              <button onClick={() => navigate("/joinig")} className="loginButton">Join</button>
            </>
        }
      </div>
      <Drawer width={300} title="Menu" placement="right" onClose={onClose} open={open}>
        <div className='tabs'>
          <a href='https://64fe41cb8667876d1f17be27--stupendous-brioche-87051a.netlify.app/' target='_blank'>
            <p style={{ color: "#3B7DED" }} >
              isttaa Institute
            </p>
          </a>
          <a href='https://64fe4200d0af9f77106bc62d--musical-macaron-279441.netlify.app/' target='_blank'>
            <p style={{ color: "#2BA24C" }} >
              isttaa Solutions
            </p>
          </a>
          <p onClick={()=>message.warning("Comming Soon")} style={{ color: "#E43E2B" }} >
            isttaa Store
          </p>
        </div>
        <button onClick={() => navigate("/joinig")} className="loginButton">Join</button>
      </Drawer>
    </div >
  )
}

export default TopBar