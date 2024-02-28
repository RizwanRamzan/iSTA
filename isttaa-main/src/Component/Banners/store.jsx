import React from 'react'
import { It_shop } from '../../assets'
import { message } from 'antd'

const Store = () => {
    return (
        <div onClick={() => message.warning("Comming Soon")} className="it_shop_wrapper" style={{ height: "90vh" }}>

            <div className="it_shop">
                <div className="it_shop_left">
                    <h1>
                        Your Source for <br />
                        IT Accessories
                    </h1>
                    <p> Services </p>
                    <div className="it_shop__buttons">
                        <button>Laptop</button>
                        <button>Computer</button>
                        <button>Mobile</button>
                    </div>
                    <p className="it_shop_text">
                        "Welcome to TechEssentials! Your Ultimate Destination for IT
                        Accessories. Discover a Wide Range of High-Quality Products. From
                        cables to gadgets, we've got you covered. Elevate your tech
                        experience with us!"
                    </p>
                </div>
                <div className="it_shop_right">
                    <img src={It_shop} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Store