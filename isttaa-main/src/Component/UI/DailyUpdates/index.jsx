import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DailyUpdates = () => {
  return (
    <Carousel autoPlay showIndicators={false}>
      <div>
        <img src="https://ohanadoc.s3.amazonaws.com/images/Mask+group.png" />
      </div>
      <div>
        <img src="https://ohanadoc.s3.amazonaws.com/images/Mask+group+(1).png" />
      </div>
      
    </Carousel>
  );
};

export default DailyUpdates;
