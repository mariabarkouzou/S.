import React, { Component } from "react";
import { CarouselData } from "./CarouselData";
import Swipe from "react-easy-swipe";

class Hero1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 5000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = index => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        <div className="max-w-9xl mx-auto">
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
                {CarouselData.map((slide, index) => {
                  return (
                    <img
                      src={slide.image}
                      alt="wall"
                      key={index}
                      className={
                        index === this.state.currentSlide
                          ? "w-full h-full object-fill"
                          : "hidden"
                      }
                      onMouseEnter={() => {
                        this.setState({ paused: true });
                      }}
                      onMouseLeave={() => {
                        this.setState({ paused: false });
                      }}
                    />
                  );
                })}
              </Swipe>
              <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
            </div>
            <div className="relative py-16 2xl:ml-48 lg:ml-36 md:ml-24 sm:ml-12 ml-12 sm:px-6 sm:py-24 lg:py-32">
              <h1 className="text-left text-white xl:text-2xl lg:text-2xl md:text-xlg font-extra-bold sm:text-xl lg:text-6xl">
                <span className="underline underline-offset-8 decoration-yellow">
                  S.
                </span>
                und Co
              </h1>
              <p className="mt-6 text-left 2xl:text-xlg sm:text-middle lg:text-xlg md:text-normal text-white font-extra-bold sm:max-w-lg">
                To take a trivial example, which of us ever undertakes laborious
                physical exercise, except to obtain some advantage from it?
              </p>
              <div className="mt-20 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"></div>
              </div>
            </div>
            <div className="absolute w-full flex justify-center bottom-0 p-5 bg-gradient-to-r from-black to-gray-700">
              {CarouselData.map((element, index) => {
                return (
                  <div
                    className={
                      index === this.state.currentSlide
                        ? "h-2 w-2 bg-gray-100 rounded-full mx-2 mb-2 cursor-pointer"
                        : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                    }
                    key={index}
                    onClick={() => {
                      this.setCurrentSlide(index);
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Hero1;
