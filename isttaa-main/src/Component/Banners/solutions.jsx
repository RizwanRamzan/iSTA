import React from 'react'
import { Ista_sol } from '../../assets'

const SolutionsBanner = () => {
    return (
        <a href='https://64fe4200d0af9f77106bc62d--musical-macaron-279441.netlify.app/' target='_blank'>
            <div className="ista_wrapper" style={{ height: "90vh" }}>
                <div className="ista">
                    <div className="ista_left">
                        <h1>
                            Unlock the Ideal <br /> IT Service, Right Now!
                        </h1>
                        <p> Services </p>
                        <div className="ista__buttons">
                            <button>Graphics & Design</button>
                            <button>Development</button>
                            <button>Digital Marketing</button>
                        </div>
                        <p className="ista_text">
                            "Discover Perfection: Our Ideal IT Service, Just for You! Embrace
                            Innovation and Efficiency with Us. Unlock Limitless Possibilities,
                            Right Here, Right Now! Experience Excellence in Software
                            Solutions. Your IT Dreams Come True with Our Expert Team. Don't
                            Wait, Act Now!"
                        </p>
                    </div>
                    <div className="ista_right">
                        <img src={Ista_sol} alt="" />
                    </div>
                </div>
            </div>
        </a>
    )
}

export default SolutionsBanner