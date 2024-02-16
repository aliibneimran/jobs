import React, { useEffect } from 'react';
import Swiper from 'swiper';
// import 'swiper/swiper.min.css';

export default function Category() {
  // useEffect(() => {
  //   const swiper = new Swiper('.swiper-container', {
  //     slidesPerView: 'auto',
  //     navigation: {
  //       nextEl: '.swiper-button-next-1',
  //       prevEl: '.swiper-button-prev-1',
  //       },
  //     });
  //   }, []);
  return (
    <div>
  <section className="section-box mt-50">
      <div className="section-box wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="text-start">
            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Popular category</h2>
            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Search and connect with the right candidates faster.</p>
          </div>
          <div className="box-swiper mt-50">
            <div className="swiper-container swiper-group-6 mh-none swiper">
              <div className="swiper-wrapper pb-70 pt-5">
                <div className="swiper-slide hover-up">
                  <div className="card-grid-5 card-category hover-up" style={{backgroundImage: 'url("frontend/imgs/page/homepage2/img-big1.png")'}}>
                    <a href="jobs-grid.html">
                      <div className="box-cover-img">
                        <div className="content-bottom">
                          <h6 className="color-white mb-5">Marketing &amp; Sales</h6>
                          <p className="color-white font-xs"><span>123</span><span>  Jobs Available</span></p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide hover-up">
                  <div className="card-grid-5 card-category hover-up" style={{backgroundImage: 'url("frontend/imgs/page/homepage2/img-big2.png")'}}><a href="jobs-grid.html">
                      <div className="box-cover-img">
                        <div className="content-bottom">
                          <h6 className="color-white mb-5">Human resource</h6>
                          <p className="color-white font-xs"><span>154</span><span>  Jobs Available</span></p>
                        </div>
                      </div></a></div>
                </div>
                <div className="swiper-slide hover-up">
                  <div className="card-grid-5 card-category hover-up" style={{backgroundImage: 'url("frontend/imgs/page/homepage2/img-big3.png")'}}><a href="jobs-grid.html">
                      <div className="box-cover-img">
                        <div className="content-bottom">
                          <h6 className="color-white mb-5">Finance</h6>
                          <p className="color-white font-xs"><span>546</span><span>  Jobs Available</span></p>
                        </div>
                      </div></a></div>
                </div>
                <div className="swiper-slide hover-up">
                  <div className="card-grid-5 card-category hover-up" style={{backgroundImage: 'url("frontend/imgs/page/homepage2/img-big1.png")'}}><a href="jobs-grid.html">
                      <div className="box-cover-img">
                        <div className="content-bottom">
                          <h6 className="color-white mb-5">Market Research</h6>
                          <p className="color-white font-xs"><span>24</span><span>  Jobs Available</span></p>
                        </div>
                      </div></a></div>
                </div>
                <div className="swiper-slide hover-up">
                  <div className="card-grid-5 card-category hover-up" style={{backgroundImage: 'url("frontend/imgs/page/homepage2/img-big2.png")'}}><a href="jobs-grid.html">
                      <div className="box-cover-img">
                        <div className="content-bottom">
                          <h6 className="color-white mb-5">Furniture design</h6>
                          <p className="color-white font-xs"><span>54</span><span>  Jobs Available</span></p>
                        </div>
                      </div></a></div>
                </div>
                <div className="swiper-slide hover-up">
                  <div className="card-grid-5 card-category hover-up" style={{backgroundImage: 'url("frontend/imgs/page/homepage2/img-big3.png")'}}><a href="jobs-grid.html">
                      <div className="box-cover-img">
                        <div className="content-bottom">
                          <h6 className="color-white mb-5">Content writer</h6>
                          <p className="color-white font-xs"><span>87</span><span>  Jobs Available</span></p>
                        </div>
                      </div></a></div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next swiper-button-next-1" />
            <div className="swiper-button-prev swiper-button-prev-1" />
          </div>
        </div>
      </div>
  </section>
    </div>
  )
}
