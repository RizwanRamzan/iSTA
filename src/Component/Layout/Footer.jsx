import { Col, Row } from 'antd'
import React from 'react'
import './Footer.scss'
import { SubHero } from '../../assets'
import { FooterTabs, SocialIcon } from './constant'
import { GetCurrentYear } from '../../Utils/helper'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-box'>
                <Row>
                    <Col className='footer-img' span={24}>
                        <img src={SubHero} />
                    </Col>
                </Row>
                <Row className='footer-row'>
                    {FooterTabs.map((item, index) =>
                        <Col key={index} span={6}>
                            <div>
                                <p className='footer-title'>{item?.title}</p>
                                {item?.sub_title?.map((sub_items, index) =>
                                    <p className='footer-sub-title' key={index}>{sub_items?.name}</p>
                                )}
                            </div>
                        </Col>
                    )}
                </Row>
                <Row className='social-box'>
                    <Col span={12}>
                        <p>Follow Us</p>
                    </Col>
                    <Col span={12}>
                        <div className='social-icons-list'>
                            {SocialIcon.map((item, index) =>
                                <div key={index} className='socila-icon' >
                                    <img src={item?.image} />
                                </div>
                            )}
                        </div>
                    </Col>

                </Row>
                <Row className='footer-end'>
                    <Col span={24}>
                        <p style={{textAlign:"center"}}>
                            © {GetCurrentYear} iSTA. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer