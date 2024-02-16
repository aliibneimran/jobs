import React from 'react'

export default function Hero() {
  return (
    <div>
        <section className="section-box">
    <div className="banner-hero hero-2">
      <div className="banner-inner">
        <div className="block-banner">
          <h1 className="text-42 color-white wow animate__animated animate__fadeInUp">The #1 <span className="color-green">Job Board for</span><br className="d-none d-lg-block" />Hiring or Find your next job</h1>
          <div className="font-lg font-regular color-white mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</div>
          <div className="form-find mt-40 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
            <form>
              <div className="box-industry">
                <select className="form-input mr-10 select-active input-industry">
                  <option value={0}>Industry</option>
                  <option value={1}>Software</option>
                  <option value={2}>Finance</option>
                  <option value={3}>Recruting</option>
                  <option value={4}>Management</option>
                  <option value={5}>Advertising</option>
                  <option value={6}>Development</option>
                </select>
              </div>
              <select className="form-input mr-10 select-active">
                <option value>Location</option>
                <option value="AX">Aland Islands</option>
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
              </select>
              <input className="form-input input-keysearch mr-10" type="text" placeholder="Your keyword... " />
              <button className="btn btn-default btn-find font-sm">Search</button>
            </form>
          </div>
          <div className="list-tags-banner mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".3s"><strong>Popular Searches:</strong><a href="#">Designer</a>, <a href="#">Web</a>, <a href="#">IOS</a>, <a href="#">Developer</a>, <a href="#">PHP</a>, <a href="#">Senior</a>, <a href="#">Engineer</a></div>
        </div>
        <div className="mt-60">
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
              <div className="d-inline-block text-start">
                <h4 className="color-white"> <span className="count">265</span><span> K+</span></h4>
                <p className="font-sm color-text-mutted">Daily Jobs Posted</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
              <div className="d-inline-block text-start">
                <h4 className="color-white"><span className="count">17</span><span>  K+</span></h4>
                <p className="font-sm color-text-mutted">Recruiters</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
              <div className="d-inline-block text-start">
                <h4 className="color-white"> <span className="count">15</span><span>  K+</span></h4>
                <p className="font-sm color-text-mutted">Freelancers</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
              <div className="d-inline-block text-start">
                <h4 className="color-white"> <span className="count">28</span><span> K+</span></h4>
                <p className="font-sm color-text-mutted">Blog Tips</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="list-brands mt-40 mb-30">
        <div className="box-swiper">
          <div className="swiper-container swiper-group-9 swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/microsoft.svg" alt="jobBox" /></a></div>
              <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/sony.svg" alt="jobBox" /></a></div>
              <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/acer.svg" alt="jobBox" /></a></div>
              <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/nokia.svg" alt="jobBox" /></a></div>
              <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/assus.svg" alt="jobBox" /></a></div>
              <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/casio.svg" alt="jobBox" /></a></div>
              <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/dell.svg" alt="jobBox" /></a></div>
              <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/panasonic.svg" alt="jobBox" /></a></div>
              <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/vaio.svg" alt="jobBox" /></a></div>
              <div className="swiper-slide"><a href="#"><img src="frontend/imgs/slider/logo/sharp.svg" alt="jobBox" /></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
