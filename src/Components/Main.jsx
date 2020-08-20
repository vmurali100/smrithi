import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div className="wrapper">
            <div className="hero_slide">
              <div className="hero_slide_single hero_slide_single_in section">
                <div className="slide" data-anchor="slide1">
                  <img
                    src="image/hero_1.jpg"
                    alt=""
                    className="hero_slide_single_img"
                  />
                  <div className="hero_slide_single_dtls">
                    <h1 className="text-white mb-30">Captur</h1>

                    <a href="" className="button btn_white_border btn_rounded">
                      Discover
                    </a>

                    <a href="" className="button btn_white_border btn_rounded">
                      Subscribe
                    </a>
                  </div>
                </div>
                <div className="slide" data-anchor="slide2">
                  <img
                    src="image/hero_2.jpg"
                    alt=""
                    className="hero_slide_single_img"
                  />
                  <div className="hero_slide_single_dtls">
                    <h1 className="text-white mb-30">Koleos</h1>

                    <a href="" className="button btn_white_border btn_rounded">
                      Discover
                    </a>

                    <a href="" className="button btn_white_border btn_rounded">
                      Subscribe
                    </a>
                  </div>
                </div>
                <div className="slide" data-anchor="slide2">
                  <img
                    src="image/hero_3.png"
                    alt=""
                    className="hero_slide_single_img"
                  />
                  <div className="hero_slide_single_dtls">
                    <h1 className="text-white mb-30">Megane R.S</h1>

                    <a href="" className="button btn_white_border btn_rounded">
                      Discover
                    </a>

                    <a href="" className="button btn_white_border btn_rounded">
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
              <div className="hero_slide_single section">
                <img
                  src="image/hero_2.jpg"
                  alt=""
                  className="hero_slide_single_img"
                />
                <div className="hero_slide_single_dtls">
                  <h1 className="text-white">Subscribe to freedom</h1>

                  <p className="mb-30 text-white">
                    Subscribe to a Renault from RM1,299/month
                  </p>

                  <a href="" className="button btn_white_border btn_rounded">
                    Discover freedom
                  </a>
                </div>
              </div>
              <div className="hero_slide_single section">
                <img
                  src="image/hero_3.png"
                  alt=""
                  className="hero_slide_single_img"
                />
                <div className="hero_slide_single_dtls">
                  <h1 className="text-white">Discover Passion</h1>

                  <p className="mb-30 text-white">
                    Renault and motorsports, over 120 years in the making
                  </p>

                  <a href="" className="button btn_white_border btn_rounded">
                    Discover more
                  </a>
                </div>
              </div>
              <div className="hero_slide_single section">
                <img
                  src="image/hero_4.jpg"
                  alt=""
                  className="hero_slide_single_img"
                />
                <div className="hero_slide_single_dtls">
                  <h1 className="text-white">Test drive on your terms</h1>

                  <p className="mb-30 text-white">
                    Enjoy 3-hour pressure test drive
                  </p>

                  <a href="" className="button btn_white_border btn_rounded">
                    Discover more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
