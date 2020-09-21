import React from "react";
import SwiperCarousel from "../../components/carousel/swipercarousel";
import About from "../about/about";
import Portfolio from "../portfolio/portfolio";
import MyWork from "../mywork/mywork";
const Home = () => (
  <React.Fragment>
    <SwiperCarousel />
    <About />
    <Portfolio />
    <MyWork />
  </React.Fragment>
);

export default Home;
