import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="We are a results-driven digital agency focused on building brands that stand out and scale fast. By combining bold creativity, smart strategy, and data-backed execution, we turn ideas into high-performing digital experiences. Every move we make is intentional, measurable, and designed to drive real growth in a competitive digital world."
            author="Author Name"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="We are a results-driven digital agency focused on building brands that stand out and scale fast. By combining bold creativity, smart strategy, and data-backed execution, we turn ideas into high-performing digital experiences. Every move we make is intentional, measurable, and designed to drive real growth in a competitive digital world."
            author="Author Name"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="We are a results-driven digital agency focused on building brands that stand out and scale fast. By combining bold creativity, smart strategy, and data-backed execution, we turn ideas into high-performing digital experiences. Every move we make is intentional, measurable, and designed to drive real growth in a competitive digital world."
            author="Author Name"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="We are a results-driven digital agency focused on building brands that stand out and scale fast. By combining bold creativity, smart strategy, and data-backed execution, we turn ideas into high-performing digital experiences. Every move we make is intentional, measurable, and designed to drive real growth in a competitive digital world."
            author="Author Name"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="We are a results-driven digital agency focused on building brands that stand out and scale fast. By combining bold creativity, smart strategy, and data-backed execution, we turn ideas into high-performing digital experiences. Every move we make is intentional, measurable, and designed to drive real growth in a competitive digital world."
            author="Author Name"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="We are a results-driven digital agency focused on building brands that stand out and scale fast. By combining bold creativity, smart strategy, and data-backed execution, we turn ideas into high-performing digital experiences. Every move we make is intentional, measurable, and designed to drive real growth in a competitive digital world."
            author="Author Name"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
