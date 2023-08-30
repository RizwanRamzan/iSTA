import React from 'react'
import './about.scss'
import TopBar from '../../Component/Layout/TopBar'
import { AboutContent } from './constant'
import Footer from '../../Component/Layout/Footer'

const About = () => {
    return (
        <div className='about-main'>
            <TopBar button="Join" activeClass="activehome" />
            <div className='about'>
                <p>About</p>
            </div>
            <div className='about-content'>
                <div className='about-text-box'>
                    {AboutContent.map((item, index) =>
                        <div className='about-box' key={index} style={index == 5 ? {} : { borderBottom: "1px solid black" }}>
                            <p style={index == 0 && { color: "#414042" } || index == 1 && { color: "#3B7DED" } || index == 2 && { color: "#2BA24C" } || index == 3 && { color: "#E43E2B" } || {}} className='about-heading'>
                                {item?.title}
                            </p>
                            <p style={index == 0 && { color: "#414042" } || index == 1 && { color: "#3B7DED" } || index == 2 && { color: "#2BA24C" } || index == 3 && { color: "#E43E2B" } || {}} className='about-text'>
                                {item?.text}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}

            <Footer />

        </div>
    )
}

export default About