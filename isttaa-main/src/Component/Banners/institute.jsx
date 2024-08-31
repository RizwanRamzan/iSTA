import React from 'react'
import { Insitute_img } from '../../assets'

const InstituteBanner = () => {
    return (
        <a href='https://institute.isttaa.com/' target='_blank'>
            <div className="insitute_wrapper" style={{ height: "90vh" }}>
                <div className="insitute" style={{ height: "100%" }}>
                    <div className="insitute_left">
                        <h1>
                            Pakistan’s No.1 <br /> IT Training Institute
                        </h1>
                        <p> Services </p>
                        <div className="insitute__buttons">
                            <button>Courses</button>
                            <button>Diploma</button>
                        </div>
                        <p className="insitute_text">
                            "Welcome to isttaa, Pakistan's Premier IT Training Institute!
                            Elevate your skills, soar to new heights in technology, and
                            conquer the IT world with our cutting-edge courses. Join our
                            dynamic community of learners, guided by expert instructors, and
                            embrace a future brimming with endless possibilities. Unleash your
                            potential at isttaa!"
                        </p>
                    </div>
                    <div className="insitute_right">
                        <img src={Insitute_img} alt="" />
                    </div>
                </div>
            </div>
        </a>
    )
}

export default InstituteBanner